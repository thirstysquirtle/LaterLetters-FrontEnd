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


import * as runtime from '../runtime';
import type {
  ArrayOfLettersInner,
  CreateLetterRequest,
  CreateLetterRequestTagListValue,
} from '../models/index';
import {
    ArrayOfLettersInnerFromJSON,
    ArrayOfLettersInnerToJSON,
    CreateLetterRequestFromJSON,
    CreateLetterRequestToJSON,
    CreateLetterRequestTagListValueFromJSON,
    CreateLetterRequestTagListValueToJSON,
} from '../models/index';

export interface CreateLetterOperationRequest {
    createLetterRequest: CreateLetterRequest;
}

export interface DeleteLetterByIdRequest {
    letterId: string;
}

export interface DeleteTagRequest {
    tagId: string;
}

export interface DeleteTaggedLettersRequest {
    tagId: string;
}

export interface GetLettersByTagRequest {
    tagId: string;
}

/**
 * 
 */
export class LettersApi extends runtime.BaseAPI {

    /**
     */
    async createLetterRaw(requestParameters: CreateLetterOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.createLetterRequest === null || requestParameters.createLetterRequest === undefined) {
            throw new runtime.RequiredError('createLetterRequest','Required parameter requestParameters.createLetterRequest was null or undefined when calling createLetter.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-User-Email"] = this.configuration.apiKey("X-User-Email"); // emailHeader authentication
        }

        const response = await this.request({
            path: `/api/letters`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateLetterRequestToJSON(requestParameters.createLetterRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async createLetter(requestParameters: CreateLetterOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.createLetterRaw(requestParameters, initOverrides);
    }

    /**
     */
    async deleteLetterByIdRaw(requestParameters: DeleteLetterByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.letterId === null || requestParameters.letterId === undefined) {
            throw new runtime.RequiredError('letterId','Required parameter requestParameters.letterId was null or undefined when calling deleteLetterById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-User-Email"] = this.configuration.apiKey("X-User-Email"); // emailHeader authentication
        }

        const response = await this.request({
            path: `/api/letter/{letter_id}`.replace(`{${"letter_id"}}`, encodeURIComponent(String(requestParameters.letterId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async deleteLetterById(requestParameters: DeleteLetterByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteLetterByIdRaw(requestParameters, initOverrides);
    }

    /**
     * Deletes a tag, but no letters
     */
    async deleteTagRaw(requestParameters: DeleteTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.tagId === null || requestParameters.tagId === undefined) {
            throw new runtime.RequiredError('tagId','Required parameter requestParameters.tagId was null or undefined when calling deleteTag.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-User-Email"] = this.configuration.apiKey("X-User-Email"); // emailHeader authentication
        }

        const response = await this.request({
            path: `/api/tags/{tag_id}`.replace(`{${"tag_id"}}`, encodeURIComponent(String(requestParameters.tagId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a tag, but no letters
     */
    async deleteTag(requestParameters: DeleteTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteTagRaw(requestParameters, initOverrides);
    }

    /**
     */
    async deleteTaggedLettersRaw(requestParameters: DeleteTaggedLettersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.tagId === null || requestParameters.tagId === undefined) {
            throw new runtime.RequiredError('tagId','Required parameter requestParameters.tagId was null or undefined when calling deleteTaggedLetters.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-User-Email"] = this.configuration.apiKey("X-User-Email"); // emailHeader authentication
        }

        const response = await this.request({
            path: `/api/letters/{tag_id}`.replace(`{${"tag_id"}}`, encodeURIComponent(String(requestParameters.tagId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async deleteTaggedLetters(requestParameters: DeleteTaggedLettersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteTaggedLettersRaw(requestParameters, initOverrides);
    }

    /**
     */
    async getLettersByTagRaw(requestParameters: GetLettersByTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ArrayOfLettersInner>>> {
        if (requestParameters.tagId === null || requestParameters.tagId === undefined) {
            throw new runtime.RequiredError('tagId','Required parameter requestParameters.tagId was null or undefined when calling getLettersByTag.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-User-Email"] = this.configuration.apiKey("X-User-Email"); // emailHeader authentication
        }

        const response = await this.request({
            path: `/api/letters/{tag_id}`.replace(`{${"tag_id"}}`, encodeURIComponent(String(requestParameters.tagId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ArrayOfLettersInnerFromJSON));
    }

    /**
     */
    async getLettersByTag(requestParameters: GetLettersByTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ArrayOfLettersInner>> {
        const response = await this.getLettersByTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getTagsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: CreateLetterRequestTagListValue; }>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-User-Email"] = this.configuration.apiKey("X-User-Email"); // emailHeader authentication
        }

        const response = await this.request({
            path: `/api/tags`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => runtime.mapValues(jsonValue, CreateLetterRequestTagListValueFromJSON));
    }

    /**
     */
    async getTags(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: CreateLetterRequestTagListValue; }> {
        const response = await this.getTagsRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async queryLettersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ArrayOfLettersInner>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-User-Email"] = this.configuration.apiKey("X-User-Email"); // emailHeader authentication
        }

        const response = await this.request({
            path: `/api/letters`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ArrayOfLettersInnerFromJSON));
    }

    /**
     */
    async queryLetters(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ArrayOfLettersInner>> {
        const response = await this.queryLettersRaw(initOverrides);
        return await response.value();
    }

}
