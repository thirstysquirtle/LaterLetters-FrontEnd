/* tslint:disable */
/* eslint-disable */
/**
 * LaterLetters Api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface RequestPasswordResetRequest
 */
export interface RequestPasswordResetRequest {
    /**
     * 
     * @type {string}
     * @memberof RequestPasswordResetRequest
     */
    email?: string;
}

/**
 * Check if a given object implements the RequestPasswordResetRequest interface.
 */
export function instanceOfRequestPasswordResetRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RequestPasswordResetRequestFromJSON(json: any): RequestPasswordResetRequest {
    return RequestPasswordResetRequestFromJSONTyped(json, false);
}

export function RequestPasswordResetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestPasswordResetRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': !exists(json, 'email') ? undefined : json['email'],
    };
}

export function RequestPasswordResetRequestToJSON(value?: RequestPasswordResetRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
    };
}
