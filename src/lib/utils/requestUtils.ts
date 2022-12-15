import { browser } from "$app/environment";
import type { CustomError } from "$lib/interfaces/error.interface";

export const browserGet = (key: string): string | undefined => {
  if (browser) {
    const item = localStorage.getItem(key);
    if (item) {
      return item;
    }
  }
  return undefined;
};

export const browserSet = (key: string, value: string): void => {
  if (browser) {
    localStorage.setItem(key, value);
  }
};

export const post = async (
  fetch: any,
  url: string,
  body: unknown
): Promise<[object, Array<CustomError>]> => {
  try {
    const headers = { 'Content-Type': 'application/octet-stream', 'Authorization': '' };
    if (!(body instanceof FormData)) {
      headers['Content-Type'] = 'application/json';
      body = JSON.stringify(body);
      const token = browserGet('refreshToken');
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
      const res = await fetch(url, {
        method: 'POST',
        body,
        headers
      });
      const response = await res.json();
      if (response.errors) {
        const errors: Array<CustomError> = [];
        for (const p in response.errors) {
          errors.push({ error: response.errors[p] });
        }
        return [{}, errors];
      }
      return [response, []];
    }
  } catch (error) {
    const errors: Array<CustomError> = [{ error: 'An unknown error occurred.' }, { error: `${error} ` }];
    return [{}, errors];
  }
};