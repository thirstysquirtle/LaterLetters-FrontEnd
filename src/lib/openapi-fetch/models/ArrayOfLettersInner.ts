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
import type { CreateLetterRequestTagListValue } from './CreateLetterRequestTagListValue';
import {
    CreateLetterRequestTagListValueFromJSON,
    CreateLetterRequestTagListValueFromJSONTyped,
    CreateLetterRequestTagListValueToJSON,
} from './CreateLetterRequestTagListValue';

/**
 * 
 * @export
 * @interface ArrayOfLettersInner
 */
export interface ArrayOfLettersInner {
    /**
     * 
     * @type {string}
     * @memberof ArrayOfLettersInner
     */
    body?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ArrayOfLettersInner
     */
    tagIds: Array<string>;
    /**
     * 
     * @type {{ [key: string]: CreateLetterRequestTagListValue; }}
     * @memberof ArrayOfLettersInner
     */
    tagList: { [key: string]: CreateLetterRequestTagListValue; };
}

/**
 * Check if a given object implements the ArrayOfLettersInner interface.
 */
export function instanceOfArrayOfLettersInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ArrayOfLettersInnerFromJSON(json: any): ArrayOfLettersInner {
    return ArrayOfLettersInnerFromJSONTyped(json, false);
}

export function ArrayOfLettersInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArrayOfLettersInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'body': !exists(json, 'body') ? undefined : json['body'],
        'tagIds': !exists(json, 'tag_ids') ? undefined : json['tag_ids'],
        'tagList': !exists(json, 'tag_list') ? undefined : (mapValues(json['tag_list'], CreateLetterRequestTagListValueFromJSON)),
    };
}

export function ArrayOfLettersInnerToJSON(value?: ArrayOfLettersInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'body': value.body,
        'tag_ids': value.tagIds,
        'tag_list': value.tagList === undefined ? undefined : (mapValues(value.tagList, CreateLetterRequestTagListValueToJSON)),
    };
}

