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
 * @interface CreateLetterRequestTagListValue
 */
export interface CreateLetterRequestTagListValue {
    /**
     * 
     * @type {string}
     * @memberof CreateLetterRequestTagListValue
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateLetterRequestTagListValue
     */
    color?: string;
}

/**
 * Check if a given object implements the CreateLetterRequestTagListValue interface.
 */
export function instanceOfCreateLetterRequestTagListValue(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateLetterRequestTagListValueFromJSON(json: any): CreateLetterRequestTagListValue {
    return CreateLetterRequestTagListValueFromJSONTyped(json, false);
}

export function CreateLetterRequestTagListValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateLetterRequestTagListValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'color': !exists(json, 'color') ? undefined : json['color'],
    };
}

export function CreateLetterRequestTagListValueToJSON(value?: CreateLetterRequestTagListValue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'color': value.color,
    };
}

