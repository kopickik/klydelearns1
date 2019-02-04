// @flow
import _ from 'lodash';
import Cookies from 'js-cookie';

let API_BASE_URL;
if (__PRODUCTION__) {
  API_BASE_URL = 'https://api.coinbase.com';
} else {
  API_BASE_URL = 'http://localhost:5000/api';
}

const convertKeysToCamelCase = (obj: Object) => {
  if (!obj || typeof obj !== 'object') return obj;

  if (obj instanceof Array) {
    return _.map(obj, value => {
      return convertKeysToCamelCase(value);
    });
  }

  const newObj = {};
  _.mapKeys(obj, (value, key) => {
    newObj[_.camelCase(key)] = convertKeysToCamelCase(value);
  });

  return newObj;
};

const constructQueryString = (data: Object) => {
  const definedProperties = _.omitBy(data, v => v === undefined || v === null);

  return _.map(definedProperties, (v, k) => {
    return `${encodeURIComponent(k)}=${encodeURIComponent(v)}`;
  }).join('&');
};

type MethodType = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

type Options = {
  baseUrl?: string,
  cbVersion: string,
  cbClient: string,
  language: string,
  ignoreAuthentication?: boolean,
};

class ApiClient {
  baseUrl: string;
  cbVersion: string;
  cbClient: string;
  language: string;
  ignoreAuthentication: boolean;

  constructor(options: Options) {
    this.baseUrl = options.baseUrl || API_BASE_URL;
    this.cbVersion = options.cbVersion || '2016-08-01';
    this.cbClient = options.cbClient;
    this.language = options.language;
    this.ignoreAuthentication = options.ignoreAuthentication || false;
  }

  get deviceFingerprint(): ?string {
    return Cookies.get('df');
  }

  fetch = (
    path: string,
    method: MethodType,
    params?: ?Object,
    headersData?: Object,
  ): Promise<?Object> => {
    let body;
    let modifiedPath;
    let contentType;

    if (method === 'GET') {
      const queryString = params ? constructQueryString(params) : '';
      modifiedPath = `${path}${path.includes('?') ? '&' : '?'}${queryString}`;
    } else if (method === 'POST' || method === 'PUT') {
      // Always pass FormData as is, no need to convert into JSON string
      if (params instanceof FormData) {
        // Correct mimetype is set automatically
        body = params;
      } else {
        body = JSON.stringify(params);
        contentType = 'application/json';
      }
    }

    // Construct headers
    const headers = new Headers({
      Accept: 'application/json',
      'Accept-Language': this.language,
      'CB-VERSION': this.cbVersion,
      'CB-CLIENT': this.cbClient,
      ...headersData,
    });
    if (contentType) {
      headers.set('Content-Type', contentType);
    }
    if (window.jwtToken && !this.ignoreAuthentication) {
      headers.set('Authorization', `JWT ${window.jwtToken}`);
    }
    if (this.deviceFingerprint) {
      headers.set('CB-FP', this.deviceFingerprint);
    }

    // Handle request promises and return a new promise
    let statusCode = null;
    return new Promise((resolve, reject) => {
      fetch(this.baseUrl + (modifiedPath || path), {
        method,
        body,
        headers,
        redirect: 'follow',
      })
        .then(response => {
          // 204 No Content should resolve right away
          if (response.status === 204) {
            return resolve(null);
          }

          const json = response.json();
          statusCode = response.status;

          // Handle successful responses
          if (response.status >= 200 && response.status < 300) {
            return json.then(data => {
              resolve(convertKeysToCamelCase(data));
            });
          }

          return json.then(err => {
            throw err;
          });
        })
        .catch(err => {
          let error;
          if (err.errors) {
            error = {
              message: err.errors[0].message,
              response: err,
              statusCode,
            };
          } else {
            error = {
              message: 'Something went wrong, please try again.',
              response: null,
              statusCode,
            };
          }

          // Reload page on 401 expired_token error. This can happen if the user
          // has had the window open for a while, e.g. over night
          if (err.errors && err.errors[0].id === 'expired_token') {
            window.location.reload(false);
          }

          reject(error);
        });
    });
  };

  post = (
    path: string,
    data?: Object,
    headers: Object = {},
  ): Promise<?Object> => {
    return this.fetch(path, 'POST', data, headers);
  };

  put = (
    path: string,
    data: Object,
    headers: Object = {},
  ): Promise<?Object> => {
    return this.fetch(path, 'PUT', data, headers);
  };

  get = (
    path: string,
    data: ?Object,
    headers: Object = {},
  ): Promise<?Object> => {
    return this.fetch(path, 'GET', data, headers);
  };

  delete = (
    path: string,
    data: ?Object,
    headers: Object = {},
  ): Promise<?Object> => {
    return this.fetch(path, 'DELETE', data, headers);
  };
}

export default ApiClient;
export { constructQueryString, convertKeysToCamelCase };
