/**
 * @module Errors/Connectivity/OpenTok
 */

/**
 * Define errors returned by OpenTok.js
 */

import { get } from '../util';
import { OTError } from '../types/opentok/error';

export enum ErrorNames {
  NETWORK_TEST_ERROR = 'NetworkTestError',
  MISSING_OPENTOK_INSTANCE = 'MissingOpenTokInstanceError',
  INCOMPLETE_SESSON_CREDENTIALS = 'IncompleteSessionCredentialsError',
  MISSING_SESSON_CREDENTIALS = 'MissingSessionCredentialsError',
  INVALID_ON_UPDATE_CALLBACK = 'InvalidOnUpdateCallback',
  CONNECTIVITY_ERROR = 'ConnectivityError',
  API_CONNECTIVITY_ERROR = 'APIConnectivityError',
  CONNECT_TO_SESSION_ERROR = 'ConnectToSessionError',
  CONNECT_TO_SESSION_TOKEN_ERROR = 'ConnectToSessionTokenError',
  CONNECT_TO_SESSION_ID_ERROR = 'ConnectToSessionSessionIdError',
  CONNECT_TO_SESSION_NETWORK_ERROR = 'ConnectToSessionNetworkError',
  MEDIA_DEVICE_ERROR = 'MediaDeviceError',
  FAILED_TO_OBTAIN_MEDIA_DEVICES = 'FailedToObtainMediaDevices',
  NO_VIDEO_CAPTURE_DEVICES = 'NoVideoCaptureDevicesError',
  NO_AUDIO_CAPTURE_DEVICES = 'NoAudioCaptureDevicesError',
  PUBLISH_TO_SESSION_ERROR = 'PublishToSessionError',
  INIT_PUBLISHER_ERROR = 'InitPublisherError',
  FAILED_MESSAGING_SERVER_TEST = 'FailedMessagingServerTestError',
  FAILED_TO_CREATE_LOCAL_PUBLISHER = 'FailedToCreateLocalPublisher',
  PUBLISH_TO_SESSION_NOT_CONNECTED = 'PublishToSessionNotConnectedError',
  PUBLISH_TO_SESSION_PERMISSION_OR_TIMEOUT_ERROR = 'PublishToSessionPermissionOrTimeoutError',
  PUBLISH_TO_SESSION_NETWORK_ERROR = 'PublishToSessionNetworkError',
  SUBSCRIBE_TO_SESSION_ERROR = 'SubscribeToSessionError',
  LOGGING_SERVER_CONNECTION_ERROR = 'LoggingServerConnectionError',
  QUALITY_TEST_ERROR = 'QualityTestError',
  UNSUPPORTED_BROWSER = 'UnsupportedBrowser',
  SUBSCRIBER_GET_STATS_ERROR = 'SubscriberGetStatsError',
  MISSING_SUBSCRIBER_ERROR = 'MissingSubscriberError',
}

export enum OTErrorType {
  JS_EXCEPTION = 'JS_EXCEPTION',
  OT_AUTHENTICATION_ERROR = 'OT_AUTHENTICATION_ERROR',
  OT_INVALID_HTTP_STATUS = 'OT_INVALID_HTTP_STATUS',
  OT_CONNECT_FAILED = 'OT_CONNECT_FAILED',
  OT_INVALID_SESSION_ID = 'OT_INVALID_SESSION_ID',
  CONNECT_FAILED = 'CONNECT_FAILED',
  CONNECT_REJECTED = 'CONNECT_REJECTED',
  CONNECTION_TIMEOUT = 'CONNECTION_TIMEOUT',
  NOT_CONNECTED = 'NOT_CONNECTED',
  INVALID_PARAMETER = 'INVALID_PARAMETER',
  P2P_CONNECTION_FAILED = 'P2P_CONNECTION_FAILED',
  API_RESPONSE_FAILURE = 'API_RESPONSE_FAILURE',
  TERMS_OF_SERVICE_FAILURE = 'TERMS_OF_SERVICE_FAILURE',
  CONNECTION_LIMIT_EXCEEDED = 'CONNECTION_LIMIT_EXCEEDED',
  UNABLE_TO_PUBLISH = 'UNABLE_TO_PUBLISH',
  UNABLE_TO_SUBSCRIBE = 'UNABLE_TO_SUBSCRIBE',
  UNSUPPORTED_VIDEO_CODEC = 'UNSUPPORTED_VIDEO_CODEC',
  UNABLE_TO_FORCE_DISCONNECT = 'UNABLE_TO_FORCE_DISCONNECT',
  UNABLE_TO_FORCE_UNPUBLISH = 'UNABLE_TO_FORCE_UNPUBLISH',
  PUBLISHER_ICE_WORKFLOW_FAILED = 'PUBLISHER_ICE_WORKFLOW_FAILED',
  SUBSCRIBER_ICE_WORKFLOW_FAILED = 'SUBSCRIBER_ICE_WORKFLOW_FAILED',
  STREAM_LIMIT_EXCEEDED = 'STREAM_LIMIT_EXCEEDED',
  UNEXPECTED_SERVER_RESPONSE = 'UNEXPECTED_SERVER_RESPONSE',
  REPORT_ISSUE_ERROR = 'REPORT_ISSUE_ERROR',
  ANVIL_BADLY_FORMED_RESPONSE = 'ANVIL_BADLY_FORMED_RESPONSE',
  ANVIL_INVALID_HTTP_STATUS = 'ANVIL_INVALID_HTTP_STATUS',
  ANVIL_XDOMAIN_OR_PARSING_ERROR = 'ANVIL_XDOMAIN_OR_PARSING_ERROR',
  ANVIL_UNKNOWN_HTTP_ERROR = 'ANVIL_UNKNOWN_HTTP_ERROR',
  ANVIL_UNEXPECTED_ERROR_CODE = 'ANVIL_UNEXPECTED_ERROR_CODE',
  ANVIL_EMPTY_RESPONSE_BODY = 'ANVIL_EMPTY_RESPONSE_BODY',
  ANVIL_CONNECT_FAILED = 'ANVIL_CONNECT_FAILED',
}

export const errorHasName =
  (error: OTError | null = null, name: OTErrorType): boolean => get('name', error) === name;
