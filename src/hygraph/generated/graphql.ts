/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  Hex: { input: any; output: any; }
  /** Raw JSON value */
  Json: { input: any; output: any; }
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: { input: any; output: any; }
  RGBAHue: { input: any; output: any; }
  RGBATransparency: { input: any; output: any; }
  /** Slate-compatible RichText AST */
  RichTextAST: { input: any; output: any; }
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int']['output'];
};

/** Asset system model */
export type Asset = Entity & Node & {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String']['output'];
  /** The file handle */
  handle: Scalars['String']['output'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']['output']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']['output'];
  /** The file width */
  width?: Maybe<Scalars['Float']['output']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName: Scalars['String']['input'];
  handle: Scalars['String']['input'];
  height?: InputMaybe<Scalars['Float']['input']>;
  iconLogoSet?: InputMaybe<LogoSetCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  ogImageSEO?: InputMaybe<SeoCreateManyInlineInput>;
  primaryLogoSet?: InputMaybe<LogoSetCreateManyInlineInput>;
  profilePhotoPersonalOverviewSection?: InputMaybe<PersonalOverviewSectionCreateManyInlineInput>;
  size?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName: Scalars['String']['input'];
  handle: Scalars['String']['input'];
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  iconLogoSet?: InputMaybe<LogoSetUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  ogImageSEO?: InputMaybe<SeoUpdateManyInlineInput>;
  primaryLogoSet?: InputMaybe<LogoSetUpdateManyInlineInput>;
  profilePhotoPersonalOverviewSection?: InputMaybe<PersonalOverviewSectionUpdateManyInlineInput>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']['output'];
};

/** A key belief and/or focus. */
export type Belief = Entity & {
  __typename?: 'Belief';
  /** A description of the belief and/or focus. */
  description: Scalars['String']['output'];
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System stage field */
  stage: Stage;
  /** The keyword for the belief and/or focus. */
  title: Scalars['String']['output'];
};

export type BeliefConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: BeliefWhereUniqueInput;
};

/** A connection to a list of items. */
export type BeliefConnection = {
  __typename?: 'BeliefConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<BeliefEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type BeliefCreateInput = {
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type BeliefCreateManyInlineInput = {
  /** Create and connect multiple existing Belief documents */
  create?: InputMaybe<Array<BeliefCreateInput>>;
};

export type BeliefCreateOneInlineInput = {
  /** Create and connect one Belief document */
  create?: InputMaybe<BeliefCreateInput>;
};

export type BeliefCreateWithPositionInput = {
  /** Document to create */
  data: BeliefCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type BeliefEdge = {
  __typename?: 'BeliefEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Belief;
};

/** Identifies documents */
export type BeliefManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BeliefWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BeliefWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BeliefWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum BeliefOrderByInput {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type BeliefParent = BeliefsSection;

export type BeliefParentConnectInput = {
  BeliefsSection?: InputMaybe<BeliefsSectionConnectInput>;
};

export type BeliefParentCreateInput = {
  BeliefsSection?: InputMaybe<BeliefsSectionCreateInput>;
};

export type BeliefParentCreateManyInlineInput = {
  /** Create and connect multiple existing BeliefParent documents */
  create?: InputMaybe<Array<BeliefParentCreateInput>>;
};

export type BeliefParentCreateOneInlineInput = {
  /** Create and connect one BeliefParent document */
  create?: InputMaybe<BeliefParentCreateInput>;
};

export type BeliefParentCreateWithPositionInput = {
  BeliefsSection?: InputMaybe<BeliefsSectionCreateWithPositionInput>;
};

export type BeliefParentUpdateInput = {
  BeliefsSection?: InputMaybe<BeliefsSectionUpdateInput>;
};

export type BeliefParentUpdateManyInlineInput = {
  /** Create and connect multiple BeliefParent component instances */
  create?: InputMaybe<Array<BeliefParentCreateWithPositionInput>>;
  /** Delete multiple BeliefParent documents */
  delete?: InputMaybe<Array<BeliefParentWhereUniqueInput>>;
  /** Update multiple BeliefParent component instances */
  update?: InputMaybe<Array<BeliefParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple BeliefParent component instances */
  upsert?: InputMaybe<Array<BeliefParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type BeliefParentUpdateManyWithNestedWhereInput = {
  BeliefsSection?: InputMaybe<BeliefsSectionUpdateManyWithNestedWhereInput>;
};

export type BeliefParentUpdateOneInlineInput = {
  /** Create and connect one BeliefParent document */
  create?: InputMaybe<BeliefParentCreateInput>;
  /** Delete currently connected BeliefParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single BeliefParent document */
  update?: InputMaybe<BeliefParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single BeliefParent document */
  upsert?: InputMaybe<BeliefParentUpsertWithNestedWhereUniqueInput>;
};

export type BeliefParentUpdateWithNestedWhereUniqueAndPositionInput = {
  BeliefsSection?: InputMaybe<BeliefsSectionUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type BeliefParentUpdateWithNestedWhereUniqueInput = {
  BeliefsSection?: InputMaybe<BeliefsSectionUpdateWithNestedWhereUniqueInput>;
};

export type BeliefParentUpsertWithNestedWhereUniqueAndPositionInput = {
  BeliefsSection?: InputMaybe<BeliefsSectionUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type BeliefParentUpsertWithNestedWhereUniqueInput = {
  BeliefsSection?: InputMaybe<BeliefsSectionUpsertWithNestedWhereUniqueInput>;
};

export type BeliefParentWhereInput = {
  BeliefsSection?: InputMaybe<BeliefsSectionWhereInput>;
};

export type BeliefParentWhereUniqueInput = {
  BeliefsSection?: InputMaybe<BeliefsSectionWhereUniqueInput>;
};

export type BeliefUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BeliefUpdateManyInlineInput = {
  /** Create and connect multiple Belief component instances */
  create?: InputMaybe<Array<BeliefCreateWithPositionInput>>;
  /** Delete multiple Belief documents */
  delete?: InputMaybe<Array<BeliefWhereUniqueInput>>;
  /** Update multiple Belief component instances */
  update?: InputMaybe<Array<BeliefUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Belief component instances */
  upsert?: InputMaybe<Array<BeliefUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type BeliefUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type BeliefUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: BeliefUpdateManyInput;
  /** Document search */
  where: BeliefWhereInput;
};

export type BeliefUpdateOneInlineInput = {
  /** Create and connect one Belief document */
  create?: InputMaybe<BeliefCreateInput>;
  /** Delete currently connected Belief document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Belief document */
  update?: InputMaybe<BeliefUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Belief document */
  upsert?: InputMaybe<BeliefUpsertWithNestedWhereUniqueInput>;
};

export type BeliefUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<BeliefUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: BeliefWhereUniqueInput;
};

export type BeliefUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: BeliefUpdateInput;
  /** Unique document search */
  where: BeliefWhereUniqueInput;
};

export type BeliefUpsertInput = {
  /** Create document if it didn't exist */
  create: BeliefCreateInput;
  /** Update document if it exists */
  update: BeliefUpdateInput;
};

export type BeliefUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<BeliefUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: BeliefWhereUniqueInput;
};

export type BeliefUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: BeliefUpsertInput;
  /** Unique document search */
  where: BeliefWhereUniqueInput;
};

/** Identifies documents */
export type BeliefWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BeliefWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BeliefWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BeliefWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References Belief record uniquely */
export type BeliefWhereUniqueInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** A section detailing several key beliefs and/or focuses. */
export type BeliefsSection = Entity & {
  __typename?: 'BeliefsSection';
  /** The beliefs and/or focuses to be included in the section. */
  beliefs: Array<Belief>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System stage field */
  stage: Stage;
};


/** A section detailing several key beliefs and/or focuses. */
export type BeliefsSectionBeliefsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<BeliefOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BeliefWhereInput>;
};

export type BeliefsSectionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: BeliefsSectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type BeliefsSectionConnection = {
  __typename?: 'BeliefsSectionConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<BeliefsSectionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type BeliefsSectionCreateInput = {
  beliefs?: InputMaybe<BeliefCreateManyInlineInput>;
};

export type BeliefsSectionCreateManyInlineInput = {
  /** Create and connect multiple existing BeliefsSection documents */
  create?: InputMaybe<Array<BeliefsSectionCreateInput>>;
};

export type BeliefsSectionCreateOneInlineInput = {
  /** Create and connect one BeliefsSection document */
  create?: InputMaybe<BeliefsSectionCreateInput>;
};

export type BeliefsSectionCreateWithPositionInput = {
  /** Document to create */
  data: BeliefsSectionCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type BeliefsSectionEdge = {
  __typename?: 'BeliefsSectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: BeliefsSection;
};

/** Identifies documents */
export type BeliefsSectionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BeliefsSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BeliefsSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BeliefsSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  beliefs_every?: InputMaybe<BeliefWhereInput>;
  beliefs_none?: InputMaybe<BeliefWhereInput>;
  beliefs_some?: InputMaybe<BeliefWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export enum BeliefsSectionOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type BeliefsSectionParent = GeneralPage;

export type BeliefsSectionParentConnectInput = {
  GeneralPage?: InputMaybe<GeneralPageConnectInput>;
};

export type BeliefsSectionParentCreateInput = {
  GeneralPage?: InputMaybe<GeneralPageCreateInput>;
};

export type BeliefsSectionParentCreateManyInlineInput = {
  /** Connect multiple existing BeliefsSectionParent documents */
  connect?: InputMaybe<Array<BeliefsSectionParentWhereUniqueInput>>;
  /** Create and connect multiple existing BeliefsSectionParent documents */
  create?: InputMaybe<Array<BeliefsSectionParentCreateInput>>;
};

export type BeliefsSectionParentCreateOneInlineInput = {
  /** Connect one existing BeliefsSectionParent document */
  connect?: InputMaybe<BeliefsSectionParentWhereUniqueInput>;
  /** Create and connect one BeliefsSectionParent document */
  create?: InputMaybe<BeliefsSectionParentCreateInput>;
};

export type BeliefsSectionParentUpdateInput = {
  GeneralPage?: InputMaybe<GeneralPageUpdateInput>;
};

export type BeliefsSectionParentUpdateManyInlineInput = {
  /** Connect multiple existing BeliefsSectionParent documents */
  connect?: InputMaybe<Array<BeliefsSectionParentConnectInput>>;
  /** Create and connect multiple BeliefsSectionParent documents */
  create?: InputMaybe<Array<BeliefsSectionParentCreateInput>>;
  /** Delete multiple BeliefsSectionParent documents */
  delete?: InputMaybe<Array<BeliefsSectionParentWhereUniqueInput>>;
  /** Disconnect multiple BeliefsSectionParent documents */
  disconnect?: InputMaybe<Array<BeliefsSectionParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing BeliefsSectionParent documents */
  set?: InputMaybe<Array<BeliefsSectionParentWhereUniqueInput>>;
  /** Update multiple BeliefsSectionParent documents */
  update?: InputMaybe<Array<BeliefsSectionParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple BeliefsSectionParent documents */
  upsert?: InputMaybe<Array<BeliefsSectionParentUpsertWithNestedWhereUniqueInput>>;
};

export type BeliefsSectionParentUpdateManyWithNestedWhereInput = {
  GeneralPage?: InputMaybe<GeneralPageUpdateManyWithNestedWhereInput>;
};

export type BeliefsSectionParentUpdateOneInlineInput = {
  /** Connect existing BeliefsSectionParent document */
  connect?: InputMaybe<BeliefsSectionParentWhereUniqueInput>;
  /** Create and connect one BeliefsSectionParent document */
  create?: InputMaybe<BeliefsSectionParentCreateInput>;
  /** Delete currently connected BeliefsSectionParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected BeliefsSectionParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single BeliefsSectionParent document */
  update?: InputMaybe<BeliefsSectionParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single BeliefsSectionParent document */
  upsert?: InputMaybe<BeliefsSectionParentUpsertWithNestedWhereUniqueInput>;
};

export type BeliefsSectionParentUpdateWithNestedWhereUniqueInput = {
  GeneralPage?: InputMaybe<GeneralPageUpdateWithNestedWhereUniqueInput>;
};

export type BeliefsSectionParentUpsertWithNestedWhereUniqueInput = {
  GeneralPage?: InputMaybe<GeneralPageUpsertWithNestedWhereUniqueInput>;
};

export type BeliefsSectionParentWhereInput = {
  GeneralPage?: InputMaybe<GeneralPageWhereInput>;
};

export type BeliefsSectionParentWhereUniqueInput = {
  GeneralPage?: InputMaybe<GeneralPageWhereUniqueInput>;
};

export type BeliefsSectionUpdateInput = {
  beliefs?: InputMaybe<BeliefUpdateManyInlineInput>;
};

export type BeliefsSectionUpdateManyInlineInput = {
  /** Create and connect multiple BeliefsSection component instances */
  create?: InputMaybe<Array<BeliefsSectionCreateWithPositionInput>>;
  /** Delete multiple BeliefsSection documents */
  delete?: InputMaybe<Array<BeliefsSectionWhereUniqueInput>>;
  /** Update multiple BeliefsSection component instances */
  update?: InputMaybe<Array<BeliefsSectionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple BeliefsSection component instances */
  upsert?: InputMaybe<Array<BeliefsSectionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type BeliefsSectionUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type BeliefsSectionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: BeliefsSectionUpdateManyInput;
  /** Document search */
  where: BeliefsSectionWhereInput;
};

export type BeliefsSectionUpdateOneInlineInput = {
  /** Create and connect one BeliefsSection document */
  create?: InputMaybe<BeliefsSectionCreateInput>;
  /** Delete currently connected BeliefsSection document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single BeliefsSection document */
  update?: InputMaybe<BeliefsSectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single BeliefsSection document */
  upsert?: InputMaybe<BeliefsSectionUpsertWithNestedWhereUniqueInput>;
};

export type BeliefsSectionUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<BeliefsSectionUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: BeliefsSectionWhereUniqueInput;
};

export type BeliefsSectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: BeliefsSectionUpdateInput;
  /** Unique document search */
  where: BeliefsSectionWhereUniqueInput;
};

export type BeliefsSectionUpsertInput = {
  /** Create document if it didn't exist */
  create: BeliefsSectionCreateInput;
  /** Update document if it exists */
  update: BeliefsSectionUpdateInput;
};

export type BeliefsSectionUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<BeliefsSectionUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: BeliefsSectionWhereUniqueInput;
};

export type BeliefsSectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: BeliefsSectionUpsertInput;
  /** Unique document search */
  where: BeliefsSectionWhereUniqueInput;
};

/** Identifies documents */
export type BeliefsSectionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BeliefsSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BeliefsSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BeliefsSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  beliefs_every?: InputMaybe<BeliefWhereInput>;
  beliefs_none?: InputMaybe<BeliefWhereInput>;
  beliefs_some?: InputMaybe<BeliefWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

/** References BeliefsSection record uniquely */
export type BeliefsSectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** A list of cards for particular content type. */
export type CardListSection = Entity & {
  __typename?: 'CardListSection';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Items to include in the list. */
  items: Array<ListSectionItems>;
  /** System stage field */
  stage: Stage;
};


/** A list of cards for particular content type. */
export type CardListSectionItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type CardListSectionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CardListSectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type CardListSectionConnection = {
  __typename?: 'CardListSectionConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CardListSectionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CardListSectionCreateInput = {
  items?: InputMaybe<ListSectionItemsCreateManyInlineInput>;
};

export type CardListSectionCreateManyInlineInput = {
  /** Create and connect multiple existing CardListSection documents */
  create?: InputMaybe<Array<CardListSectionCreateInput>>;
};

export type CardListSectionCreateOneInlineInput = {
  /** Create and connect one CardListSection document */
  create?: InputMaybe<CardListSectionCreateInput>;
};

export type CardListSectionCreateWithPositionInput = {
  /** Document to create */
  data: CardListSectionCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type CardListSectionEdge = {
  __typename?: 'CardListSectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CardListSection;
};

/** Identifies documents */
export type CardListSectionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CardListSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CardListSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CardListSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values in which the union is empty */
  items_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the union contains at least one connection to the provided item to the filter */
  items_some?: InputMaybe<ListSectionItemsWhereInput>;
};

export enum CardListSectionOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type CardListSectionParent = GeneralPage;

export type CardListSectionParentConnectInput = {
  GeneralPage?: InputMaybe<GeneralPageConnectInput>;
};

export type CardListSectionParentCreateInput = {
  GeneralPage?: InputMaybe<GeneralPageCreateInput>;
};

export type CardListSectionParentCreateManyInlineInput = {
  /** Connect multiple existing CardListSectionParent documents */
  connect?: InputMaybe<Array<CardListSectionParentWhereUniqueInput>>;
  /** Create and connect multiple existing CardListSectionParent documents */
  create?: InputMaybe<Array<CardListSectionParentCreateInput>>;
};

export type CardListSectionParentCreateOneInlineInput = {
  /** Connect one existing CardListSectionParent document */
  connect?: InputMaybe<CardListSectionParentWhereUniqueInput>;
  /** Create and connect one CardListSectionParent document */
  create?: InputMaybe<CardListSectionParentCreateInput>;
};

export type CardListSectionParentUpdateInput = {
  GeneralPage?: InputMaybe<GeneralPageUpdateInput>;
};

export type CardListSectionParentUpdateManyInlineInput = {
  /** Connect multiple existing CardListSectionParent documents */
  connect?: InputMaybe<Array<CardListSectionParentConnectInput>>;
  /** Create and connect multiple CardListSectionParent documents */
  create?: InputMaybe<Array<CardListSectionParentCreateInput>>;
  /** Delete multiple CardListSectionParent documents */
  delete?: InputMaybe<Array<CardListSectionParentWhereUniqueInput>>;
  /** Disconnect multiple CardListSectionParent documents */
  disconnect?: InputMaybe<Array<CardListSectionParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing CardListSectionParent documents */
  set?: InputMaybe<Array<CardListSectionParentWhereUniqueInput>>;
  /** Update multiple CardListSectionParent documents */
  update?: InputMaybe<Array<CardListSectionParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple CardListSectionParent documents */
  upsert?: InputMaybe<Array<CardListSectionParentUpsertWithNestedWhereUniqueInput>>;
};

export type CardListSectionParentUpdateManyWithNestedWhereInput = {
  GeneralPage?: InputMaybe<GeneralPageUpdateManyWithNestedWhereInput>;
};

export type CardListSectionParentUpdateOneInlineInput = {
  /** Connect existing CardListSectionParent document */
  connect?: InputMaybe<CardListSectionParentWhereUniqueInput>;
  /** Create and connect one CardListSectionParent document */
  create?: InputMaybe<CardListSectionParentCreateInput>;
  /** Delete currently connected CardListSectionParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected CardListSectionParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single CardListSectionParent document */
  update?: InputMaybe<CardListSectionParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CardListSectionParent document */
  upsert?: InputMaybe<CardListSectionParentUpsertWithNestedWhereUniqueInput>;
};

export type CardListSectionParentUpdateWithNestedWhereUniqueInput = {
  GeneralPage?: InputMaybe<GeneralPageUpdateWithNestedWhereUniqueInput>;
};

export type CardListSectionParentUpsertWithNestedWhereUniqueInput = {
  GeneralPage?: InputMaybe<GeneralPageUpsertWithNestedWhereUniqueInput>;
};

export type CardListSectionParentWhereInput = {
  GeneralPage?: InputMaybe<GeneralPageWhereInput>;
};

export type CardListSectionParentWhereUniqueInput = {
  GeneralPage?: InputMaybe<GeneralPageWhereUniqueInput>;
};

export type CardListSectionUpdateInput = {
  items?: InputMaybe<ListSectionItemsUpdateManyInlineInput>;
};

export type CardListSectionUpdateManyInlineInput = {
  /** Create and connect multiple CardListSection component instances */
  create?: InputMaybe<Array<CardListSectionCreateWithPositionInput>>;
  /** Delete multiple CardListSection documents */
  delete?: InputMaybe<Array<CardListSectionWhereUniqueInput>>;
  /** Update multiple CardListSection component instances */
  update?: InputMaybe<Array<CardListSectionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple CardListSection component instances */
  upsert?: InputMaybe<Array<CardListSectionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type CardListSectionUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type CardListSectionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CardListSectionUpdateManyInput;
  /** Document search */
  where: CardListSectionWhereInput;
};

export type CardListSectionUpdateOneInlineInput = {
  /** Create and connect one CardListSection document */
  create?: InputMaybe<CardListSectionCreateInput>;
  /** Delete currently connected CardListSection document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single CardListSection document */
  update?: InputMaybe<CardListSectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CardListSection document */
  upsert?: InputMaybe<CardListSectionUpsertWithNestedWhereUniqueInput>;
};

export type CardListSectionUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<CardListSectionUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CardListSectionWhereUniqueInput;
};

export type CardListSectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CardListSectionUpdateInput;
  /** Unique document search */
  where: CardListSectionWhereUniqueInput;
};

export type CardListSectionUpsertInput = {
  /** Create document if it didn't exist */
  create: CardListSectionCreateInput;
  /** Update document if it exists */
  update: CardListSectionUpdateInput;
};

export type CardListSectionUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<CardListSectionUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CardListSectionWhereUniqueInput;
};

export type CardListSectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CardListSectionUpsertInput;
  /** Unique document search */
  where: CardListSectionWhereUniqueInput;
};

/** Identifies documents */
export type CardListSectionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CardListSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CardListSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CardListSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values in which the union is empty */
  items_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the union contains at least one connection to the provided item to the filter */
  items_some?: InputMaybe<ListSectionItemsWhereInput>;
};

/** References CardListSection record uniquely */
export type CardListSectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String']['output'];
  hex: Scalars['Hex']['output'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']['input']>;
  rgba?: InputMaybe<RgbaInput>;
};

/** A set of colors reflecting a branding. */
export type ColorSet = Entity & {
  __typename?: 'ColorSet';
  /** A colour in which the logo and text can be displayed on top of. */
  background: Color;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The main colour reflecting the branding. */
  primary: Color;
  /** System stage field */
  stage: Stage;
  /** A colour that can be used for text that contrasts with the background colour. */
  text: Color;
};

export type ColorSetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ColorSetWhereUniqueInput;
};

/** A connection to a list of items. */
export type ColorSetConnection = {
  __typename?: 'ColorSetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ColorSetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ColorSetCreateInput = {
  background: ColorInput;
  primary: ColorInput;
  text: ColorInput;
};

export type ColorSetCreateManyInlineInput = {
  /** Create and connect multiple existing ColorSet documents */
  create?: InputMaybe<Array<ColorSetCreateInput>>;
};

export type ColorSetCreateOneInlineInput = {
  /** Create and connect one ColorSet document */
  create?: InputMaybe<ColorSetCreateInput>;
};

export type ColorSetCreateWithPositionInput = {
  /** Document to create */
  data: ColorSetCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ColorSetEdge = {
  __typename?: 'ColorSetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ColorSet;
};

/** Identifies documents */
export type ColorSetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ColorSetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ColorSetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ColorSetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export enum ColorSetOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type ColorSetParent = Company | EducationalInstitution | Project | Technology;

export type ColorSetParentConnectInput = {
  Company?: InputMaybe<CompanyConnectInput>;
  EducationalInstitution?: InputMaybe<EducationalInstitutionConnectInput>;
  Project?: InputMaybe<ProjectConnectInput>;
  Technology?: InputMaybe<TechnologyConnectInput>;
};

export type ColorSetParentCreateInput = {
  Company?: InputMaybe<CompanyCreateInput>;
  EducationalInstitution?: InputMaybe<EducationalInstitutionCreateInput>;
  Project?: InputMaybe<ProjectCreateInput>;
  Technology?: InputMaybe<TechnologyCreateInput>;
};

export type ColorSetParentCreateManyInlineInput = {
  /** Connect multiple existing ColorSetParent documents */
  connect?: InputMaybe<Array<ColorSetParentWhereUniqueInput>>;
  /** Create and connect multiple existing ColorSetParent documents */
  create?: InputMaybe<Array<ColorSetParentCreateInput>>;
};

export type ColorSetParentCreateOneInlineInput = {
  /** Connect one existing ColorSetParent document */
  connect?: InputMaybe<ColorSetParentWhereUniqueInput>;
  /** Create and connect one ColorSetParent document */
  create?: InputMaybe<ColorSetParentCreateInput>;
};

export type ColorSetParentUpdateInput = {
  Company?: InputMaybe<CompanyUpdateInput>;
  EducationalInstitution?: InputMaybe<EducationalInstitutionUpdateInput>;
  Project?: InputMaybe<ProjectUpdateInput>;
  Technology?: InputMaybe<TechnologyUpdateInput>;
};

export type ColorSetParentUpdateManyInlineInput = {
  /** Connect multiple existing ColorSetParent documents */
  connect?: InputMaybe<Array<ColorSetParentConnectInput>>;
  /** Create and connect multiple ColorSetParent documents */
  create?: InputMaybe<Array<ColorSetParentCreateInput>>;
  /** Delete multiple ColorSetParent documents */
  delete?: InputMaybe<Array<ColorSetParentWhereUniqueInput>>;
  /** Disconnect multiple ColorSetParent documents */
  disconnect?: InputMaybe<Array<ColorSetParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ColorSetParent documents */
  set?: InputMaybe<Array<ColorSetParentWhereUniqueInput>>;
  /** Update multiple ColorSetParent documents */
  update?: InputMaybe<Array<ColorSetParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ColorSetParent documents */
  upsert?: InputMaybe<Array<ColorSetParentUpsertWithNestedWhereUniqueInput>>;
};

export type ColorSetParentUpdateManyWithNestedWhereInput = {
  Company?: InputMaybe<CompanyUpdateManyWithNestedWhereInput>;
  EducationalInstitution?: InputMaybe<EducationalInstitutionUpdateManyWithNestedWhereInput>;
  Project?: InputMaybe<ProjectUpdateManyWithNestedWhereInput>;
  Technology?: InputMaybe<TechnologyUpdateManyWithNestedWhereInput>;
};

export type ColorSetParentUpdateOneInlineInput = {
  /** Connect existing ColorSetParent document */
  connect?: InputMaybe<ColorSetParentWhereUniqueInput>;
  /** Create and connect one ColorSetParent document */
  create?: InputMaybe<ColorSetParentCreateInput>;
  /** Delete currently connected ColorSetParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ColorSetParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ColorSetParent document */
  update?: InputMaybe<ColorSetParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ColorSetParent document */
  upsert?: InputMaybe<ColorSetParentUpsertWithNestedWhereUniqueInput>;
};

export type ColorSetParentUpdateWithNestedWhereUniqueInput = {
  Company?: InputMaybe<CompanyUpdateWithNestedWhereUniqueInput>;
  EducationalInstitution?: InputMaybe<EducationalInstitutionUpdateWithNestedWhereUniqueInput>;
  Project?: InputMaybe<ProjectUpdateWithNestedWhereUniqueInput>;
  Technology?: InputMaybe<TechnologyUpdateWithNestedWhereUniqueInput>;
};

export type ColorSetParentUpsertWithNestedWhereUniqueInput = {
  Company?: InputMaybe<CompanyUpsertWithNestedWhereUniqueInput>;
  EducationalInstitution?: InputMaybe<EducationalInstitutionUpsertWithNestedWhereUniqueInput>;
  Project?: InputMaybe<ProjectUpsertWithNestedWhereUniqueInput>;
  Technology?: InputMaybe<TechnologyUpsertWithNestedWhereUniqueInput>;
};

export type ColorSetParentWhereInput = {
  Company?: InputMaybe<CompanyWhereInput>;
  EducationalInstitution?: InputMaybe<EducationalInstitutionWhereInput>;
  Project?: InputMaybe<ProjectWhereInput>;
  Technology?: InputMaybe<TechnologyWhereInput>;
};

export type ColorSetParentWhereUniqueInput = {
  Company?: InputMaybe<CompanyWhereUniqueInput>;
  EducationalInstitution?: InputMaybe<EducationalInstitutionWhereUniqueInput>;
  Project?: InputMaybe<ProjectWhereUniqueInput>;
  Technology?: InputMaybe<TechnologyWhereUniqueInput>;
};

export type ColorSetUpdateInput = {
  background?: InputMaybe<ColorInput>;
  primary?: InputMaybe<ColorInput>;
  text?: InputMaybe<ColorInput>;
};

export type ColorSetUpdateManyInlineInput = {
  /** Create and connect multiple ColorSet component instances */
  create?: InputMaybe<Array<ColorSetCreateWithPositionInput>>;
  /** Delete multiple ColorSet documents */
  delete?: InputMaybe<Array<ColorSetWhereUniqueInput>>;
  /** Update multiple ColorSet component instances */
  update?: InputMaybe<Array<ColorSetUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ColorSet component instances */
  upsert?: InputMaybe<Array<ColorSetUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ColorSetUpdateManyInput = {
  background?: InputMaybe<ColorInput>;
  primary?: InputMaybe<ColorInput>;
  text?: InputMaybe<ColorInput>;
};

export type ColorSetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ColorSetUpdateManyInput;
  /** Document search */
  where: ColorSetWhereInput;
};

export type ColorSetUpdateOneInlineInput = {
  /** Create and connect one ColorSet document */
  create?: InputMaybe<ColorSetCreateInput>;
  /** Delete currently connected ColorSet document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ColorSet document */
  update?: InputMaybe<ColorSetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ColorSet document */
  upsert?: InputMaybe<ColorSetUpsertWithNestedWhereUniqueInput>;
};

export type ColorSetUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ColorSetUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ColorSetWhereUniqueInput;
};

export type ColorSetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ColorSetUpdateInput;
  /** Unique document search */
  where: ColorSetWhereUniqueInput;
};

export type ColorSetUpsertInput = {
  /** Create document if it didn't exist */
  create: ColorSetCreateInput;
  /** Update document if it exists */
  update: ColorSetUpdateInput;
};

export type ColorSetUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ColorSetUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ColorSetWhereUniqueInput;
};

export type ColorSetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ColorSetUpsertInput;
  /** Unique document search */
  where: ColorSetWhereUniqueInput;
};

/** Identifies documents */
export type ColorSetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ColorSetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ColorSetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ColorSetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

/** References ColorSet record uniquely */
export type ColorSetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** A company that I have worked for as a developer. */
export type Company = Entity & Node & {
  __typename?: 'Company';
  /** A set of colors reflecting the branding of the company. */
  colors?: Maybe<ColorSet>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Company>;
  /** List of Company versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The primary logo and icon for the company. */
  logo?: Maybe<LogoSet>;
  /** The name of the company. */
  name: Scalars['String']['output'];
  /** The projects that were worked on while at the company. */
  projects: Array<Project>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** The roles I have had at the company. */
  roles: Array<CompanyrolesUnion>;
  scheduledIn: Array<ScheduledOperation>;
  /** A unique identifier for the company to be used in the URL. */
  slug?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  /** The duration where I worked at the company. */
  timeFrame: DateRange;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** A company that I have worked for as a developer. */
export type CompanyColorsArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** A company that I have worked for as a developer. */
export type CompanyCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** A company that I have worked for as a developer. */
export type CompanyDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** A company that I have worked for as a developer. */
export type CompanyHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** A company that I have worked for as a developer. */
export type CompanyLogoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** A company that I have worked for as a developer. */
export type CompanyProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProjectOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectWhereInput>;
};


/** A company that I have worked for as a developer. */
export type CompanyPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** A company that I have worked for as a developer. */
export type CompanyRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** A company that I have worked for as a developer. */
export type CompanyScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** A company that I have worked for as a developer. */
export type CompanyTimeFrameArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** A company that I have worked for as a developer. */
export type CompanyUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type CompanyConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CompanyWhereUniqueInput;
};

/** A connection to a list of items. */
export type CompanyConnection = {
  __typename?: 'CompanyConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CompanyEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CompanyCreateInput = {
  clvxhkaev0ok4072q73t4fz3s?: InputMaybe<ResumeCreateManyInlineInput>;
  colors?: InputMaybe<ColorSetCreateOneInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  logo?: InputMaybe<LogoSetCreateOneInlineInput>;
  name: Scalars['String']['input'];
  projects?: InputMaybe<ProjectCreateManyInlineInput>;
  roles?: InputMaybe<CompanyrolesUnionCreateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  timeFrame: DateRangeCreateOneInlineInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CompanyCreateManyInlineInput = {
  /** Connect multiple existing Company documents */
  connect?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  /** Create and connect multiple existing Company documents */
  create?: InputMaybe<Array<CompanyCreateInput>>;
};

export type CompanyCreateOneInlineInput = {
  /** Connect one existing Company document */
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  /** Create and connect one Company document */
  create?: InputMaybe<CompanyCreateInput>;
};

/** An edge in a connection. */
export type CompanyEdge = {
  __typename?: 'CompanyEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Company;
};

/** Identifies documents */
export type CompanyManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CompanyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CompanyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CompanyWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  colors?: InputMaybe<ColorSetWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<CompanyWhereStageInput>;
  documentInStages_none?: InputMaybe<CompanyWhereStageInput>;
  documentInStages_some?: InputMaybe<CompanyWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  logo?: InputMaybe<LogoSetWhereInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  projects_every?: InputMaybe<ProjectWhereInput>;
  projects_none?: InputMaybe<ProjectWhereInput>;
  projects_some?: InputMaybe<ProjectWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values in which the union is empty. */
  roles_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  roles_some?: InputMaybe<CompanyrolesUnionWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  timeFrame?: InputMaybe<DateRangeWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CompanyOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CompanyUpdateInput = {
  clvxhkaev0ok4072q73t4fz3s?: InputMaybe<ResumeUpdateManyInlineInput>;
  colors?: InputMaybe<ColorSetUpdateOneInlineInput>;
  logo?: InputMaybe<LogoSetUpdateOneInlineInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  projects?: InputMaybe<ProjectUpdateManyInlineInput>;
  roles?: InputMaybe<CompanyrolesUnionUpdateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  timeFrame?: InputMaybe<DateRangeUpdateOneInlineInput>;
};

export type CompanyUpdateManyInlineInput = {
  /** Connect multiple existing Company documents */
  connect?: InputMaybe<Array<CompanyConnectInput>>;
  /** Create and connect multiple Company documents */
  create?: InputMaybe<Array<CompanyCreateInput>>;
  /** Delete multiple Company documents */
  delete?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  /** Disconnect multiple Company documents */
  disconnect?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Company documents */
  set?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  /** Update multiple Company documents */
  update?: InputMaybe<Array<CompanyUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Company documents */
  upsert?: InputMaybe<Array<CompanyUpsertWithNestedWhereUniqueInput>>;
};

export type CompanyUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type CompanyUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CompanyUpdateManyInput;
  /** Document search */
  where: CompanyWhereInput;
};

export type CompanyUpdateOneInlineInput = {
  /** Connect existing Company document */
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  /** Create and connect one Company document */
  create?: InputMaybe<CompanyCreateInput>;
  /** Delete currently connected Company document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Company document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Company document */
  update?: InputMaybe<CompanyUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Company document */
  upsert?: InputMaybe<CompanyUpsertWithNestedWhereUniqueInput>;
};

export type CompanyUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CompanyUpdateInput;
  /** Unique document search */
  where: CompanyWhereUniqueInput;
};

export type CompanyUpsertInput = {
  /** Create document if it didn't exist */
  create: CompanyCreateInput;
  /** Update document if it exists */
  update: CompanyUpdateInput;
};

export type CompanyUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CompanyUpsertInput;
  /** Unique document search */
  where: CompanyWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type CompanyWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type CompanyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CompanyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CompanyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CompanyWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  colors?: InputMaybe<ColorSetWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<CompanyWhereStageInput>;
  documentInStages_none?: InputMaybe<CompanyWhereStageInput>;
  documentInStages_some?: InputMaybe<CompanyWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  logo?: InputMaybe<LogoSetWhereInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  projects_every?: InputMaybe<ProjectWhereInput>;
  projects_none?: InputMaybe<ProjectWhereInput>;
  projects_some?: InputMaybe<ProjectWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values in which the union is empty. */
  roles_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  roles_some?: InputMaybe<CompanyrolesUnionWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  timeFrame?: InputMaybe<DateRangeWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CompanyWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CompanyWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CompanyWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CompanyWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<CompanyWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Company record uniquely */
export type CompanyWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CompanyrolesUnion = Role;

export type CompanyrolesUnionConnectInput = {
  Role?: InputMaybe<RoleConnectInput>;
};

export type CompanyrolesUnionCreateInput = {
  Role?: InputMaybe<RoleCreateInput>;
};

export type CompanyrolesUnionCreateManyInlineInput = {
  /** Create and connect multiple existing CompanyrolesUnion documents */
  create?: InputMaybe<Array<CompanyrolesUnionCreateInput>>;
};

export type CompanyrolesUnionCreateOneInlineInput = {
  /** Create and connect one CompanyrolesUnion document */
  create?: InputMaybe<CompanyrolesUnionCreateInput>;
};

export type CompanyrolesUnionCreateWithPositionInput = {
  Role?: InputMaybe<RoleCreateWithPositionInput>;
};

export type CompanyrolesUnionUpdateInput = {
  Role?: InputMaybe<RoleUpdateInput>;
};

export type CompanyrolesUnionUpdateManyInlineInput = {
  /** Create and connect multiple CompanyrolesUnion component instances */
  create?: InputMaybe<Array<CompanyrolesUnionCreateWithPositionInput>>;
  /** Delete multiple CompanyrolesUnion documents */
  delete?: InputMaybe<Array<CompanyrolesUnionWhereUniqueInput>>;
  /** Update multiple CompanyrolesUnion component instances */
  update?: InputMaybe<Array<CompanyrolesUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple CompanyrolesUnion component instances */
  upsert?: InputMaybe<Array<CompanyrolesUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type CompanyrolesUnionUpdateManyWithNestedWhereInput = {
  Role?: InputMaybe<RoleUpdateManyWithNestedWhereInput>;
};

export type CompanyrolesUnionUpdateOneInlineInput = {
  /** Create and connect one CompanyrolesUnion document */
  create?: InputMaybe<CompanyrolesUnionCreateInput>;
  /** Delete currently connected CompanyrolesUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single CompanyrolesUnion document */
  update?: InputMaybe<CompanyrolesUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CompanyrolesUnion document */
  upsert?: InputMaybe<CompanyrolesUnionUpsertWithNestedWhereUniqueInput>;
};

export type CompanyrolesUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Role?: InputMaybe<RoleUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type CompanyrolesUnionUpdateWithNestedWhereUniqueInput = {
  Role?: InputMaybe<RoleUpdateWithNestedWhereUniqueInput>;
};

export type CompanyrolesUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Role?: InputMaybe<RoleUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type CompanyrolesUnionUpsertWithNestedWhereUniqueInput = {
  Role?: InputMaybe<RoleUpsertWithNestedWhereUniqueInput>;
};

export type CompanyrolesUnionWhereInput = {
  Role?: InputMaybe<RoleWhereInput>;
};

export type CompanyrolesUnionWhereUniqueInput = {
  Role?: InputMaybe<RoleWhereUniqueInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']['input']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']['input']>;
};

/** The section including contact details and a form to send a message. */
export type ContactFormSection = Entity & {
  __typename?: 'ContactFormSection';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System stage field */
  stage: Stage;
};

export type ContactFormSectionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ContactFormSectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type ContactFormSectionConnection = {
  __typename?: 'ContactFormSectionConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ContactFormSectionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ContactFormSectionCreateInput = {
  /** No fields in create input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type ContactFormSectionCreateManyInlineInput = {
  /** Create and connect multiple existing ContactFormSection documents */
  create?: InputMaybe<Array<ContactFormSectionCreateInput>>;
};

export type ContactFormSectionCreateOneInlineInput = {
  /** Create and connect one ContactFormSection document */
  create?: InputMaybe<ContactFormSectionCreateInput>;
};

export type ContactFormSectionCreateWithPositionInput = {
  /** Document to create */
  data: ContactFormSectionCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ContactFormSectionEdge = {
  __typename?: 'ContactFormSectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ContactFormSection;
};

/** Identifies documents */
export type ContactFormSectionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContactFormSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContactFormSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContactFormSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export enum ContactFormSectionOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type ContactFormSectionParent = GeneralPage;

export type ContactFormSectionParentConnectInput = {
  GeneralPage?: InputMaybe<GeneralPageConnectInput>;
};

export type ContactFormSectionParentCreateInput = {
  GeneralPage?: InputMaybe<GeneralPageCreateInput>;
};

export type ContactFormSectionParentCreateManyInlineInput = {
  /** Connect multiple existing ContactFormSectionParent documents */
  connect?: InputMaybe<Array<ContactFormSectionParentWhereUniqueInput>>;
  /** Create and connect multiple existing ContactFormSectionParent documents */
  create?: InputMaybe<Array<ContactFormSectionParentCreateInput>>;
};

export type ContactFormSectionParentCreateOneInlineInput = {
  /** Connect one existing ContactFormSectionParent document */
  connect?: InputMaybe<ContactFormSectionParentWhereUniqueInput>;
  /** Create and connect one ContactFormSectionParent document */
  create?: InputMaybe<ContactFormSectionParentCreateInput>;
};

export type ContactFormSectionParentUpdateInput = {
  GeneralPage?: InputMaybe<GeneralPageUpdateInput>;
};

export type ContactFormSectionParentUpdateManyInlineInput = {
  /** Connect multiple existing ContactFormSectionParent documents */
  connect?: InputMaybe<Array<ContactFormSectionParentConnectInput>>;
  /** Create and connect multiple ContactFormSectionParent documents */
  create?: InputMaybe<Array<ContactFormSectionParentCreateInput>>;
  /** Delete multiple ContactFormSectionParent documents */
  delete?: InputMaybe<Array<ContactFormSectionParentWhereUniqueInput>>;
  /** Disconnect multiple ContactFormSectionParent documents */
  disconnect?: InputMaybe<Array<ContactFormSectionParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ContactFormSectionParent documents */
  set?: InputMaybe<Array<ContactFormSectionParentWhereUniqueInput>>;
  /** Update multiple ContactFormSectionParent documents */
  update?: InputMaybe<Array<ContactFormSectionParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ContactFormSectionParent documents */
  upsert?: InputMaybe<Array<ContactFormSectionParentUpsertWithNestedWhereUniqueInput>>;
};

export type ContactFormSectionParentUpdateManyWithNestedWhereInput = {
  GeneralPage?: InputMaybe<GeneralPageUpdateManyWithNestedWhereInput>;
};

export type ContactFormSectionParentUpdateOneInlineInput = {
  /** Connect existing ContactFormSectionParent document */
  connect?: InputMaybe<ContactFormSectionParentWhereUniqueInput>;
  /** Create and connect one ContactFormSectionParent document */
  create?: InputMaybe<ContactFormSectionParentCreateInput>;
  /** Delete currently connected ContactFormSectionParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ContactFormSectionParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ContactFormSectionParent document */
  update?: InputMaybe<ContactFormSectionParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ContactFormSectionParent document */
  upsert?: InputMaybe<ContactFormSectionParentUpsertWithNestedWhereUniqueInput>;
};

export type ContactFormSectionParentUpdateWithNestedWhereUniqueInput = {
  GeneralPage?: InputMaybe<GeneralPageUpdateWithNestedWhereUniqueInput>;
};

export type ContactFormSectionParentUpsertWithNestedWhereUniqueInput = {
  GeneralPage?: InputMaybe<GeneralPageUpsertWithNestedWhereUniqueInput>;
};

export type ContactFormSectionParentWhereInput = {
  GeneralPage?: InputMaybe<GeneralPageWhereInput>;
};

export type ContactFormSectionParentWhereUniqueInput = {
  GeneralPage?: InputMaybe<GeneralPageWhereUniqueInput>;
};

export type ContactFormSectionUpdateInput = {
  /** No fields in update input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type ContactFormSectionUpdateManyInlineInput = {
  /** Create and connect multiple ContactFormSection component instances */
  create?: InputMaybe<Array<ContactFormSectionCreateWithPositionInput>>;
  /** Delete multiple ContactFormSection documents */
  delete?: InputMaybe<Array<ContactFormSectionWhereUniqueInput>>;
  /** Update multiple ContactFormSection component instances */
  update?: InputMaybe<Array<ContactFormSectionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ContactFormSection component instances */
  upsert?: InputMaybe<Array<ContactFormSectionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ContactFormSectionUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type ContactFormSectionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ContactFormSectionUpdateManyInput;
  /** Document search */
  where: ContactFormSectionWhereInput;
};

export type ContactFormSectionUpdateOneInlineInput = {
  /** Create and connect one ContactFormSection document */
  create?: InputMaybe<ContactFormSectionCreateInput>;
  /** Delete currently connected ContactFormSection document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ContactFormSection document */
  update?: InputMaybe<ContactFormSectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ContactFormSection document */
  upsert?: InputMaybe<ContactFormSectionUpsertWithNestedWhereUniqueInput>;
};

export type ContactFormSectionUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ContactFormSectionUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ContactFormSectionWhereUniqueInput;
};

export type ContactFormSectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ContactFormSectionUpdateInput;
  /** Unique document search */
  where: ContactFormSectionWhereUniqueInput;
};

export type ContactFormSectionUpsertInput = {
  /** Create document if it didn't exist */
  create: ContactFormSectionCreateInput;
  /** Update document if it exists */
  update: ContactFormSectionUpdateInput;
};

export type ContactFormSectionUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ContactFormSectionUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ContactFormSectionWhereUniqueInput;
};

export type ContactFormSectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ContactFormSectionUpsertInput;
  /** Unique document search */
  where: ContactFormSectionWhereUniqueInput;
};

/** Identifies documents */
export type ContactFormSectionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContactFormSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContactFormSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContactFormSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

/** References ContactFormSection record uniquely */
export type ContactFormSectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** A course that I have completed. */
export type Course = Entity & Node & {
  __typename?: 'Course';
  /** The unique code for the course (if applicable). */
  code: Scalars['String']['output'];
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** A description of the course. */
  description: Scalars['String']['output'];
  /** Get the document in other stages */
  documentInStages: Array<Course>;
  /** The grade awarded for completing the course (if applicable). */
  grade?: Maybe<Scalars['String']['output']>;
  /** List of Course versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The name of the course. */
  name: Scalars['String']['output'];
  /** The projects that were worked on as part of the course. */
  projects: Array<Project>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** The qualifications that the course contributed towards. */
  qualifications: Array<Qualification>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The duration where I studied for and completed the course. */
  timeFrame: DateRange;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** A link to the web page for the course. */
  url: Scalars['String']['output'];
};


/** A course that I have completed. */
export type CourseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** A course that I have completed. */
export type CourseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** A course that I have completed. */
export type CourseHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** A course that I have completed. */
export type CourseProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProjectOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectWhereInput>;
};


/** A course that I have completed. */
export type CoursePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** A course that I have completed. */
export type CourseQualificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<QualificationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QualificationWhereInput>;
};


/** A course that I have completed. */
export type CourseScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** A course that I have completed. */
export type CourseTimeFrameArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** A course that I have completed. */
export type CourseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type CourseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CourseWhereUniqueInput;
};

/** A connection to a list of items. */
export type CourseConnection = {
  __typename?: 'CourseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CourseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CourseCreateInput = {
  code: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  grade?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  projects?: InputMaybe<ProjectCreateManyInlineInput>;
  qualifications?: InputMaybe<QualificationCreateManyInlineInput>;
  timeFrame: DateRangeCreateOneInlineInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  url: Scalars['String']['input'];
};

export type CourseCreateManyInlineInput = {
  /** Connect multiple existing Course documents */
  connect?: InputMaybe<Array<CourseWhereUniqueInput>>;
  /** Create and connect multiple existing Course documents */
  create?: InputMaybe<Array<CourseCreateInput>>;
};

export type CourseCreateOneInlineInput = {
  /** Connect one existing Course document */
  connect?: InputMaybe<CourseWhereUniqueInput>;
  /** Create and connect one Course document */
  create?: InputMaybe<CourseCreateInput>;
};

/** An edge in a connection. */
export type CourseEdge = {
  __typename?: 'CourseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Course;
};

/** Identifies documents */
export type CourseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CourseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CourseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CourseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  code_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  code_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  code_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  code_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  code_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  code_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  code_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  code_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  code_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<CourseWhereStageInput>;
  documentInStages_none?: InputMaybe<CourseWhereStageInput>;
  documentInStages_some?: InputMaybe<CourseWhereStageInput>;
  grade?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  grade_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  grade_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  grade_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  grade_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  grade_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  grade_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  grade_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  grade_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  grade_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  projects_every?: InputMaybe<ProjectWhereInput>;
  projects_none?: InputMaybe<ProjectWhereInput>;
  projects_some?: InputMaybe<ProjectWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  qualifications_every?: InputMaybe<QualificationWhereInput>;
  qualifications_none?: InputMaybe<QualificationWhereInput>;
  qualifications_some?: InputMaybe<QualificationWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  timeFrame?: InputMaybe<DateRangeWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum CourseOrderByInput {
  CodeAsc = 'code_ASC',
  CodeDesc = 'code_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  GradeAsc = 'grade_ASC',
  GradeDesc = 'grade_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type CourseUpdateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  grade?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  projects?: InputMaybe<ProjectUpdateManyInlineInput>;
  qualifications?: InputMaybe<QualificationUpdateManyInlineInput>;
  timeFrame?: InputMaybe<DateRangeUpdateOneInlineInput>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CourseUpdateManyInlineInput = {
  /** Connect multiple existing Course documents */
  connect?: InputMaybe<Array<CourseConnectInput>>;
  /** Create and connect multiple Course documents */
  create?: InputMaybe<Array<CourseCreateInput>>;
  /** Delete multiple Course documents */
  delete?: InputMaybe<Array<CourseWhereUniqueInput>>;
  /** Disconnect multiple Course documents */
  disconnect?: InputMaybe<Array<CourseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Course documents */
  set?: InputMaybe<Array<CourseWhereUniqueInput>>;
  /** Update multiple Course documents */
  update?: InputMaybe<Array<CourseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Course documents */
  upsert?: InputMaybe<Array<CourseUpsertWithNestedWhereUniqueInput>>;
};

export type CourseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  grade?: InputMaybe<Scalars['String']['input']>;
};

export type CourseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CourseUpdateManyInput;
  /** Document search */
  where: CourseWhereInput;
};

export type CourseUpdateOneInlineInput = {
  /** Connect existing Course document */
  connect?: InputMaybe<CourseWhereUniqueInput>;
  /** Create and connect one Course document */
  create?: InputMaybe<CourseCreateInput>;
  /** Delete currently connected Course document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Course document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Course document */
  update?: InputMaybe<CourseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Course document */
  upsert?: InputMaybe<CourseUpsertWithNestedWhereUniqueInput>;
};

export type CourseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CourseUpdateInput;
  /** Unique document search */
  where: CourseWhereUniqueInput;
};

export type CourseUpsertInput = {
  /** Create document if it didn't exist */
  create: CourseCreateInput;
  /** Update document if it exists */
  update: CourseUpdateInput;
};

export type CourseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CourseUpsertInput;
  /** Unique document search */
  where: CourseWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type CourseWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type CourseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CourseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CourseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CourseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  code_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  code_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  code_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  code_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  code_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  code_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  code_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  code_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  code_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<CourseWhereStageInput>;
  documentInStages_none?: InputMaybe<CourseWhereStageInput>;
  documentInStages_some?: InputMaybe<CourseWhereStageInput>;
  grade?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  grade_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  grade_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  grade_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  grade_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  grade_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  grade_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  grade_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  grade_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  grade_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  projects_every?: InputMaybe<ProjectWhereInput>;
  projects_none?: InputMaybe<ProjectWhereInput>;
  projects_some?: InputMaybe<ProjectWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  qualifications_every?: InputMaybe<QualificationWhereInput>;
  qualifications_none?: InputMaybe<QualificationWhereInput>;
  qualifications_some?: InputMaybe<QualificationWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  timeFrame?: InputMaybe<DateRangeWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CourseWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CourseWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CourseWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CourseWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<CourseWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Course record uniquely */
export type CourseWhereUniqueInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** A combination of start and end dates. */
export type DateRange = Entity & {
  __typename?: 'DateRange';
  /** The end of the the date range (leave blank if the date range has not yet ended). */
  endDate?: Maybe<Scalars['Date']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System stage field */
  stage: Stage;
  /** The start of the the date range. */
  startDate: Scalars['Date']['output'];
};

export type DateRangeConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: DateRangeWhereUniqueInput;
};

/** A connection to a list of items. */
export type DateRangeConnection = {
  __typename?: 'DateRangeConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<DateRangeEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type DateRangeCreateInput = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate: Scalars['Date']['input'];
};

export type DateRangeCreateManyInlineInput = {
  /** Create and connect multiple existing DateRange documents */
  create?: InputMaybe<Array<DateRangeCreateInput>>;
};

export type DateRangeCreateOneInlineInput = {
  /** Create and connect one DateRange document */
  create?: InputMaybe<DateRangeCreateInput>;
};

export type DateRangeCreateWithPositionInput = {
  /** Document to create */
  data: DateRangeCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type DateRangeEdge = {
  __typename?: 'DateRangeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: DateRange;
};

/** Identifies documents */
export type DateRangeManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<DateRangeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<DateRangeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<DateRangeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  endDate_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  endDate_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  endDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  endDate_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  endDate_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  endDate_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  endDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  startDate_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  startDate_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  startDate_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  startDate_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  startDate_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  startDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export enum DateRangeOrderByInput {
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC'
}

export type DateRangeParent = Company | Course | EducationalInstitution | Project | Role;

export type DateRangeParentConnectInput = {
  Company?: InputMaybe<CompanyConnectInput>;
  Course?: InputMaybe<CourseConnectInput>;
  EducationalInstitution?: InputMaybe<EducationalInstitutionConnectInput>;
  Project?: InputMaybe<ProjectConnectInput>;
  Role?: InputMaybe<RoleConnectInput>;
};

export type DateRangeParentCreateInput = {
  Company?: InputMaybe<CompanyCreateInput>;
  Course?: InputMaybe<CourseCreateInput>;
  EducationalInstitution?: InputMaybe<EducationalInstitutionCreateInput>;
  Project?: InputMaybe<ProjectCreateInput>;
  Role?: InputMaybe<RoleCreateInput>;
};

export type DateRangeParentCreateManyInlineInput = {
  /** Connect multiple existing DateRangeParent documents */
  connect?: InputMaybe<Array<DateRangeParentWhereUniqueInput>>;
  /** Create and connect multiple existing DateRangeParent documents */
  create?: InputMaybe<Array<DateRangeParentCreateInput>>;
};

export type DateRangeParentCreateOneInlineInput = {
  /** Connect one existing DateRangeParent document */
  connect?: InputMaybe<DateRangeParentWhereUniqueInput>;
  /** Create and connect one DateRangeParent document */
  create?: InputMaybe<DateRangeParentCreateInput>;
};

export type DateRangeParentUpdateInput = {
  Company?: InputMaybe<CompanyUpdateInput>;
  Course?: InputMaybe<CourseUpdateInput>;
  EducationalInstitution?: InputMaybe<EducationalInstitutionUpdateInput>;
  Project?: InputMaybe<ProjectUpdateInput>;
  Role?: InputMaybe<RoleUpdateInput>;
};

export type DateRangeParentUpdateManyInlineInput = {
  /** Connect multiple existing DateRangeParent documents */
  connect?: InputMaybe<Array<DateRangeParentConnectInput>>;
  /** Create and connect multiple DateRangeParent documents */
  create?: InputMaybe<Array<DateRangeParentCreateInput>>;
  /** Delete multiple DateRangeParent documents */
  delete?: InputMaybe<Array<DateRangeParentWhereUniqueInput>>;
  /** Disconnect multiple DateRangeParent documents */
  disconnect?: InputMaybe<Array<DateRangeParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing DateRangeParent documents */
  set?: InputMaybe<Array<DateRangeParentWhereUniqueInput>>;
  /** Update multiple DateRangeParent documents */
  update?: InputMaybe<Array<DateRangeParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple DateRangeParent documents */
  upsert?: InputMaybe<Array<DateRangeParentUpsertWithNestedWhereUniqueInput>>;
};

export type DateRangeParentUpdateManyWithNestedWhereInput = {
  Company?: InputMaybe<CompanyUpdateManyWithNestedWhereInput>;
  Course?: InputMaybe<CourseUpdateManyWithNestedWhereInput>;
  EducationalInstitution?: InputMaybe<EducationalInstitutionUpdateManyWithNestedWhereInput>;
  Project?: InputMaybe<ProjectUpdateManyWithNestedWhereInput>;
  Role?: InputMaybe<RoleUpdateManyWithNestedWhereInput>;
};

export type DateRangeParentUpdateOneInlineInput = {
  /** Connect existing DateRangeParent document */
  connect?: InputMaybe<DateRangeParentWhereUniqueInput>;
  /** Create and connect one DateRangeParent document */
  create?: InputMaybe<DateRangeParentCreateInput>;
  /** Delete currently connected DateRangeParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected DateRangeParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single DateRangeParent document */
  update?: InputMaybe<DateRangeParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single DateRangeParent document */
  upsert?: InputMaybe<DateRangeParentUpsertWithNestedWhereUniqueInput>;
};

export type DateRangeParentUpdateWithNestedWhereUniqueInput = {
  Company?: InputMaybe<CompanyUpdateWithNestedWhereUniqueInput>;
  Course?: InputMaybe<CourseUpdateWithNestedWhereUniqueInput>;
  EducationalInstitution?: InputMaybe<EducationalInstitutionUpdateWithNestedWhereUniqueInput>;
  Project?: InputMaybe<ProjectUpdateWithNestedWhereUniqueInput>;
  Role?: InputMaybe<RoleUpdateWithNestedWhereUniqueInput>;
};

export type DateRangeParentUpsertWithNestedWhereUniqueInput = {
  Company?: InputMaybe<CompanyUpsertWithNestedWhereUniqueInput>;
  Course?: InputMaybe<CourseUpsertWithNestedWhereUniqueInput>;
  EducationalInstitution?: InputMaybe<EducationalInstitutionUpsertWithNestedWhereUniqueInput>;
  Project?: InputMaybe<ProjectUpsertWithNestedWhereUniqueInput>;
  Role?: InputMaybe<RoleUpsertWithNestedWhereUniqueInput>;
};

export type DateRangeParentWhereInput = {
  Company?: InputMaybe<CompanyWhereInput>;
  Course?: InputMaybe<CourseWhereInput>;
  EducationalInstitution?: InputMaybe<EducationalInstitutionWhereInput>;
  Project?: InputMaybe<ProjectWhereInput>;
  Role?: InputMaybe<RoleWhereInput>;
};

export type DateRangeParentWhereUniqueInput = {
  Company?: InputMaybe<CompanyWhereUniqueInput>;
  Course?: InputMaybe<CourseWhereUniqueInput>;
  EducationalInstitution?: InputMaybe<EducationalInstitutionWhereUniqueInput>;
  Project?: InputMaybe<ProjectWhereUniqueInput>;
  Role?: InputMaybe<RoleWhereUniqueInput>;
};

export type DateRangeUpdateInput = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type DateRangeUpdateManyInlineInput = {
  /** Create and connect multiple DateRange component instances */
  create?: InputMaybe<Array<DateRangeCreateWithPositionInput>>;
  /** Delete multiple DateRange documents */
  delete?: InputMaybe<Array<DateRangeWhereUniqueInput>>;
  /** Update multiple DateRange component instances */
  update?: InputMaybe<Array<DateRangeUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple DateRange component instances */
  upsert?: InputMaybe<Array<DateRangeUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type DateRangeUpdateManyInput = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type DateRangeUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: DateRangeUpdateManyInput;
  /** Document search */
  where: DateRangeWhereInput;
};

export type DateRangeUpdateOneInlineInput = {
  /** Create and connect one DateRange document */
  create?: InputMaybe<DateRangeCreateInput>;
  /** Delete currently connected DateRange document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single DateRange document */
  update?: InputMaybe<DateRangeUpdateWithNestedWhereUniqueInput>;
  /** Upsert single DateRange document */
  upsert?: InputMaybe<DateRangeUpsertWithNestedWhereUniqueInput>;
};

export type DateRangeUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<DateRangeUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: DateRangeWhereUniqueInput;
};

export type DateRangeUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: DateRangeUpdateInput;
  /** Unique document search */
  where: DateRangeWhereUniqueInput;
};

export type DateRangeUpsertInput = {
  /** Create document if it didn't exist */
  create: DateRangeCreateInput;
  /** Update document if it exists */
  update: DateRangeUpdateInput;
};

export type DateRangeUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<DateRangeUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: DateRangeWhereUniqueInput;
};

export type DateRangeUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: DateRangeUpsertInput;
  /** Unique document search */
  where: DateRangeWhereUniqueInput;
};

/** Identifies documents */
export type DateRangeWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<DateRangeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<DateRangeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<DateRangeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  endDate_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  endDate_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  endDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  endDate_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  endDate_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  endDate_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  endDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  startDate_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  startDate_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  startDate_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  startDate_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  startDate_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  startDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

/** References DateRange record uniquely */
export type DateRangeWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<Scalars['Json']['output']>;
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

/** A place that I have studied at. */
export type EducationalInstitution = Entity & Node & {
  __typename?: 'EducationalInstitution';
  /** A set of colors reflecting the branding of the educational institution. */
  colors?: Maybe<ColorSet>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<EducationalInstitution>;
  /** List of EducationalInstitution versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The primary logo and icon for the educational institution. */
  logo?: Maybe<LogoSet>;
  /** The name of the educational institution. */
  name: Scalars['String']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** The qualifications I have been awarded by the educational institution. */
  qualifications: Array<Qualification>;
  scheduledIn: Array<ScheduledOperation>;
  /** A unique identifier for the educational institution to be used in the URL. */
  slug?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  /** The duration where I studied at the educational institution. */
  timeFrame: DateRange;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** A link to the website for the educational institution. */
  url: Scalars['String']['output'];
};


/** A place that I have studied at. */
export type EducationalInstitutionColorsArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** A place that I have studied at. */
export type EducationalInstitutionCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** A place that I have studied at. */
export type EducationalInstitutionDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** A place that I have studied at. */
export type EducationalInstitutionHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** A place that I have studied at. */
export type EducationalInstitutionLogoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** A place that I have studied at. */
export type EducationalInstitutionPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** A place that I have studied at. */
export type EducationalInstitutionQualificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<QualificationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QualificationWhereInput>;
};


/** A place that I have studied at. */
export type EducationalInstitutionScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** A place that I have studied at. */
export type EducationalInstitutionTimeFrameArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** A place that I have studied at. */
export type EducationalInstitutionUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type EducationalInstitutionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: EducationalInstitutionWhereUniqueInput;
};

/** A connection to a list of items. */
export type EducationalInstitutionConnection = {
  __typename?: 'EducationalInstitutionConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<EducationalInstitutionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type EducationalInstitutionCreateInput = {
  colors?: InputMaybe<ColorSetCreateOneInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  logo?: InputMaybe<LogoSetCreateOneInlineInput>;
  name: Scalars['String']['input'];
  qualifications?: InputMaybe<QualificationCreateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  timeFrame: DateRangeCreateOneInlineInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  url: Scalars['String']['input'];
};

export type EducationalInstitutionCreateManyInlineInput = {
  /** Connect multiple existing EducationalInstitution documents */
  connect?: InputMaybe<Array<EducationalInstitutionWhereUniqueInput>>;
  /** Create and connect multiple existing EducationalInstitution documents */
  create?: InputMaybe<Array<EducationalInstitutionCreateInput>>;
};

export type EducationalInstitutionCreateOneInlineInput = {
  /** Connect one existing EducationalInstitution document */
  connect?: InputMaybe<EducationalInstitutionWhereUniqueInput>;
  /** Create and connect one EducationalInstitution document */
  create?: InputMaybe<EducationalInstitutionCreateInput>;
};

/** An edge in a connection. */
export type EducationalInstitutionEdge = {
  __typename?: 'EducationalInstitutionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: EducationalInstitution;
};

/** Identifies documents */
export type EducationalInstitutionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EducationalInstitutionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EducationalInstitutionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EducationalInstitutionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  colors?: InputMaybe<ColorSetWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<EducationalInstitutionWhereStageInput>;
  documentInStages_none?: InputMaybe<EducationalInstitutionWhereStageInput>;
  documentInStages_some?: InputMaybe<EducationalInstitutionWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  logo?: InputMaybe<LogoSetWhereInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  qualifications_every?: InputMaybe<QualificationWhereInput>;
  qualifications_none?: InputMaybe<QualificationWhereInput>;
  qualifications_some?: InputMaybe<QualificationWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  timeFrame?: InputMaybe<DateRangeWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum EducationalInstitutionOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type EducationalInstitutionUpdateInput = {
  colors?: InputMaybe<ColorSetUpdateOneInlineInput>;
  logo?: InputMaybe<LogoSetUpdateOneInlineInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  qualifications?: InputMaybe<QualificationUpdateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  timeFrame?: InputMaybe<DateRangeUpdateOneInlineInput>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type EducationalInstitutionUpdateManyInlineInput = {
  /** Connect multiple existing EducationalInstitution documents */
  connect?: InputMaybe<Array<EducationalInstitutionConnectInput>>;
  /** Create and connect multiple EducationalInstitution documents */
  create?: InputMaybe<Array<EducationalInstitutionCreateInput>>;
  /** Delete multiple EducationalInstitution documents */
  delete?: InputMaybe<Array<EducationalInstitutionWhereUniqueInput>>;
  /** Disconnect multiple EducationalInstitution documents */
  disconnect?: InputMaybe<Array<EducationalInstitutionWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing EducationalInstitution documents */
  set?: InputMaybe<Array<EducationalInstitutionWhereUniqueInput>>;
  /** Update multiple EducationalInstitution documents */
  update?: InputMaybe<Array<EducationalInstitutionUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple EducationalInstitution documents */
  upsert?: InputMaybe<Array<EducationalInstitutionUpsertWithNestedWhereUniqueInput>>;
};

export type EducationalInstitutionUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type EducationalInstitutionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: EducationalInstitutionUpdateManyInput;
  /** Document search */
  where: EducationalInstitutionWhereInput;
};

export type EducationalInstitutionUpdateOneInlineInput = {
  /** Connect existing EducationalInstitution document */
  connect?: InputMaybe<EducationalInstitutionWhereUniqueInput>;
  /** Create and connect one EducationalInstitution document */
  create?: InputMaybe<EducationalInstitutionCreateInput>;
  /** Delete currently connected EducationalInstitution document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected EducationalInstitution document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single EducationalInstitution document */
  update?: InputMaybe<EducationalInstitutionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single EducationalInstitution document */
  upsert?: InputMaybe<EducationalInstitutionUpsertWithNestedWhereUniqueInput>;
};

export type EducationalInstitutionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: EducationalInstitutionUpdateInput;
  /** Unique document search */
  where: EducationalInstitutionWhereUniqueInput;
};

export type EducationalInstitutionUpsertInput = {
  /** Create document if it didn't exist */
  create: EducationalInstitutionCreateInput;
  /** Update document if it exists */
  update: EducationalInstitutionUpdateInput;
};

export type EducationalInstitutionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: EducationalInstitutionUpsertInput;
  /** Unique document search */
  where: EducationalInstitutionWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type EducationalInstitutionWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type EducationalInstitutionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EducationalInstitutionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EducationalInstitutionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EducationalInstitutionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  colors?: InputMaybe<ColorSetWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<EducationalInstitutionWhereStageInput>;
  documentInStages_none?: InputMaybe<EducationalInstitutionWhereStageInput>;
  documentInStages_some?: InputMaybe<EducationalInstitutionWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  logo?: InputMaybe<LogoSetWhereInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  qualifications_every?: InputMaybe<QualificationWhereInput>;
  qualifications_none?: InputMaybe<QualificationWhereInput>;
  qualifications_some?: InputMaybe<QualificationWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  timeFrame?: InputMaybe<DateRangeWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type EducationalInstitutionWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EducationalInstitutionWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EducationalInstitutionWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EducationalInstitutionWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<EducationalInstitutionWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References EducationalInstitution record uniquely */
export type EducationalInstitutionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** An object with an ID */
export type Entity = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

/** This enumeration holds all typenames that implement the Entity interface. Components and models implement the Entity interface. */
export enum EntityTypeName {
  /** Asset system model */
  Asset = 'Asset',
  /** A key belief and/or focus. */
  Belief = 'Belief',
  /** A section detailing several key beliefs and/or focuses. */
  BeliefsSection = 'BeliefsSection',
  /** A list of cards for particular content type. */
  CardListSection = 'CardListSection',
  /** A set of colors reflecting a branding. */
  ColorSet = 'ColorSet',
  /** A company that I have worked for as a developer. */
  Company = 'Company',
  /** The section including contact details and a form to send a message. */
  ContactFormSection = 'ContactFormSection',
  /** A course that I have completed. */
  Course = 'Course',
  /** A combination of start and end dates. */
  DateRange = 'DateRange',
  /** A place that I have studied at. */
  EducationalInstitution = 'EducationalInstitution',
  /** One of the general pages of the website (i.e. a non detail page). */
  GeneralPage = 'GeneralPage',
  /** Details about a particular location. */
  LocationItem = 'LocationItem',
  /** A set of different versions of a logo. */
  LogoSet = 'LogoSet',
  /** A section displaying an overview of items relating to me personally. */
  PersonalOverviewSection = 'PersonalOverviewSection',
  /** A project that I have worked on independently or have had the majority of contribution to. */
  Project = 'Project',
  /** A qualification I have been awarded. */
  Qualification = 'Qualification',
  /** Configuration for the automatically generated resume PDF document. */
  Resume = 'Resume',
  /** For defining a role I have been in at a company. */
  Role = 'Role',
  /** SEO data for a particular page. */
  Seo = 'SEO',
  /** A single keyword to use for SEO. */
  SeoKeyword = 'SEOKeyword',
  /** Scheduled Operation system model */
  ScheduledOperation = 'ScheduledOperation',
  /** Scheduled Release system model */
  ScheduledRelease = 'ScheduledRelease',
  /** A software development technology (e.g. language, framework, etc.) used in a project. */
  Technology = 'Technology',
  /** User system model */
  User = 'User'
}

/** Allows to specify input to query models and components directly */
export type EntityWhereInput = {
  /** The ID of an object */
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Locale>;
  stage: Stage;
  /** The Type name of an object */
  typename: EntityTypeName;
};

/** One of the general pages of the website (i.e. a non detail page). */
export type GeneralPage = Entity & Node & {
  __typename?: 'GeneralPage';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<GeneralPage>;
  /** The main heading for the page. */
  heading: Scalars['String']['output'];
  /** List of GeneralPage versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Metadata relating to the page. */
  meta?: Maybe<Seo>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** Sections to be included on the page. */
  sections: Array<GeneralPagesectionsUnion>;
  /** System stage field */
  stage: Stage;
  /** Secondary text to accompany the main heading. */
  subHeading: Scalars['String']['output'];
  /** The main title for the page (a less verbose version of the heading). */
  title: Scalars['String']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** One of the general pages of the website (i.e. a non detail page). */
export type GeneralPageCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** One of the general pages of the website (i.e. a non detail page). */
export type GeneralPageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** One of the general pages of the website (i.e. a non detail page). */
export type GeneralPageHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** One of the general pages of the website (i.e. a non detail page). */
export type GeneralPageMetaArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** One of the general pages of the website (i.e. a non detail page). */
export type GeneralPagePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** One of the general pages of the website (i.e. a non detail page). */
export type GeneralPageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** One of the general pages of the website (i.e. a non detail page). */
export type GeneralPageSectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** One of the general pages of the website (i.e. a non detail page). */
export type GeneralPageUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type GeneralPageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: GeneralPageWhereUniqueInput;
};

/** A connection to a list of items. */
export type GeneralPageConnection = {
  __typename?: 'GeneralPageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<GeneralPageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type GeneralPageCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  heading: Scalars['String']['input'];
  meta?: InputMaybe<SeoCreateOneInlineInput>;
  sections?: InputMaybe<GeneralPagesectionsUnionCreateManyInlineInput>;
  subHeading: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GeneralPageCreateManyInlineInput = {
  /** Connect multiple existing GeneralPage documents */
  connect?: InputMaybe<Array<GeneralPageWhereUniqueInput>>;
  /** Create and connect multiple existing GeneralPage documents */
  create?: InputMaybe<Array<GeneralPageCreateInput>>;
};

export type GeneralPageCreateOneInlineInput = {
  /** Connect one existing GeneralPage document */
  connect?: InputMaybe<GeneralPageWhereUniqueInput>;
  /** Create and connect one GeneralPage document */
  create?: InputMaybe<GeneralPageCreateInput>;
};

/** An edge in a connection. */
export type GeneralPageEdge = {
  __typename?: 'GeneralPageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: GeneralPage;
};

/** Identifies documents */
export type GeneralPageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GeneralPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GeneralPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GeneralPageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<GeneralPageWhereStageInput>;
  documentInStages_none?: InputMaybe<GeneralPageWhereStageInput>;
  documentInStages_some?: InputMaybe<GeneralPageWhereStageInput>;
  heading?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  heading_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heading_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  heading_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  heading_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  heading_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  meta?: InputMaybe<SeoWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  /** All values in which the union is empty. */
  sections_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  sections_some?: InputMaybe<GeneralPagesectionsUnionWhereInput>;
  subHeading?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  subHeading_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  subHeading_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  subHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subHeading_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  subHeading_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  subHeading_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  subHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  subHeading_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  subHeading_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum GeneralPageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SubHeadingAsc = 'subHeading_ASC',
  SubHeadingDesc = 'subHeading_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type GeneralPageUpdateInput = {
  heading?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<SeoUpdateOneInlineInput>;
  sections?: InputMaybe<GeneralPagesectionsUnionUpdateManyInlineInput>;
  subHeading?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type GeneralPageUpdateManyInlineInput = {
  /** Connect multiple existing GeneralPage documents */
  connect?: InputMaybe<Array<GeneralPageConnectInput>>;
  /** Create and connect multiple GeneralPage documents */
  create?: InputMaybe<Array<GeneralPageCreateInput>>;
  /** Delete multiple GeneralPage documents */
  delete?: InputMaybe<Array<GeneralPageWhereUniqueInput>>;
  /** Disconnect multiple GeneralPage documents */
  disconnect?: InputMaybe<Array<GeneralPageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing GeneralPage documents */
  set?: InputMaybe<Array<GeneralPageWhereUniqueInput>>;
  /** Update multiple GeneralPage documents */
  update?: InputMaybe<Array<GeneralPageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple GeneralPage documents */
  upsert?: InputMaybe<Array<GeneralPageUpsertWithNestedWhereUniqueInput>>;
};

export type GeneralPageUpdateManyInput = {
  subHeading?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type GeneralPageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: GeneralPageUpdateManyInput;
  /** Document search */
  where: GeneralPageWhereInput;
};

export type GeneralPageUpdateOneInlineInput = {
  /** Connect existing GeneralPage document */
  connect?: InputMaybe<GeneralPageWhereUniqueInput>;
  /** Create and connect one GeneralPage document */
  create?: InputMaybe<GeneralPageCreateInput>;
  /** Delete currently connected GeneralPage document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected GeneralPage document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single GeneralPage document */
  update?: InputMaybe<GeneralPageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single GeneralPage document */
  upsert?: InputMaybe<GeneralPageUpsertWithNestedWhereUniqueInput>;
};

export type GeneralPageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: GeneralPageUpdateInput;
  /** Unique document search */
  where: GeneralPageWhereUniqueInput;
};

export type GeneralPageUpsertInput = {
  /** Create document if it didn't exist */
  create: GeneralPageCreateInput;
  /** Update document if it exists */
  update: GeneralPageUpdateInput;
};

export type GeneralPageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: GeneralPageUpsertInput;
  /** Unique document search */
  where: GeneralPageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type GeneralPageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type GeneralPageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GeneralPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GeneralPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GeneralPageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<GeneralPageWhereStageInput>;
  documentInStages_none?: InputMaybe<GeneralPageWhereStageInput>;
  documentInStages_some?: InputMaybe<GeneralPageWhereStageInput>;
  heading?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  heading_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heading_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  heading_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  heading_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  heading_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  meta?: InputMaybe<SeoWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  /** All values in which the union is empty. */
  sections_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  sections_some?: InputMaybe<GeneralPagesectionsUnionWhereInput>;
  subHeading?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  subHeading_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  subHeading_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  subHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subHeading_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  subHeading_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  subHeading_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  subHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  subHeading_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  subHeading_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type GeneralPageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GeneralPageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GeneralPageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GeneralPageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<GeneralPageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References GeneralPage record uniquely */
export type GeneralPageWhereUniqueInput = {
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type GeneralPagesectionsUnion = BeliefsSection | CardListSection | ContactFormSection | PersonalOverviewSection;

export type GeneralPagesectionsUnionConnectInput = {
  BeliefsSection?: InputMaybe<BeliefsSectionConnectInput>;
  CardListSection?: InputMaybe<CardListSectionConnectInput>;
  ContactFormSection?: InputMaybe<ContactFormSectionConnectInput>;
  PersonalOverviewSection?: InputMaybe<PersonalOverviewSectionConnectInput>;
};

export type GeneralPagesectionsUnionCreateInput = {
  BeliefsSection?: InputMaybe<BeliefsSectionCreateInput>;
  CardListSection?: InputMaybe<CardListSectionCreateInput>;
  ContactFormSection?: InputMaybe<ContactFormSectionCreateInput>;
  PersonalOverviewSection?: InputMaybe<PersonalOverviewSectionCreateInput>;
};

export type GeneralPagesectionsUnionCreateManyInlineInput = {
  /** Create and connect multiple existing GeneralPagesectionsUnion documents */
  create?: InputMaybe<Array<GeneralPagesectionsUnionCreateInput>>;
};

export type GeneralPagesectionsUnionCreateOneInlineInput = {
  /** Create and connect one GeneralPagesectionsUnion document */
  create?: InputMaybe<GeneralPagesectionsUnionCreateInput>;
};

export type GeneralPagesectionsUnionCreateWithPositionInput = {
  BeliefsSection?: InputMaybe<BeliefsSectionCreateWithPositionInput>;
  CardListSection?: InputMaybe<CardListSectionCreateWithPositionInput>;
  ContactFormSection?: InputMaybe<ContactFormSectionCreateWithPositionInput>;
  PersonalOverviewSection?: InputMaybe<PersonalOverviewSectionCreateWithPositionInput>;
};

export type GeneralPagesectionsUnionUpdateInput = {
  BeliefsSection?: InputMaybe<BeliefsSectionUpdateInput>;
  CardListSection?: InputMaybe<CardListSectionUpdateInput>;
  ContactFormSection?: InputMaybe<ContactFormSectionUpdateInput>;
  PersonalOverviewSection?: InputMaybe<PersonalOverviewSectionUpdateInput>;
};

export type GeneralPagesectionsUnionUpdateManyInlineInput = {
  /** Create and connect multiple GeneralPagesectionsUnion component instances */
  create?: InputMaybe<Array<GeneralPagesectionsUnionCreateWithPositionInput>>;
  /** Delete multiple GeneralPagesectionsUnion documents */
  delete?: InputMaybe<Array<GeneralPagesectionsUnionWhereUniqueInput>>;
  /** Update multiple GeneralPagesectionsUnion component instances */
  update?: InputMaybe<Array<GeneralPagesectionsUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple GeneralPagesectionsUnion component instances */
  upsert?: InputMaybe<Array<GeneralPagesectionsUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type GeneralPagesectionsUnionUpdateManyWithNestedWhereInput = {
  BeliefsSection?: InputMaybe<BeliefsSectionUpdateManyWithNestedWhereInput>;
  CardListSection?: InputMaybe<CardListSectionUpdateManyWithNestedWhereInput>;
  ContactFormSection?: InputMaybe<ContactFormSectionUpdateManyWithNestedWhereInput>;
  PersonalOverviewSection?: InputMaybe<PersonalOverviewSectionUpdateManyWithNestedWhereInput>;
};

export type GeneralPagesectionsUnionUpdateOneInlineInput = {
  /** Create and connect one GeneralPagesectionsUnion document */
  create?: InputMaybe<GeneralPagesectionsUnionCreateInput>;
  /** Delete currently connected GeneralPagesectionsUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single GeneralPagesectionsUnion document */
  update?: InputMaybe<GeneralPagesectionsUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single GeneralPagesectionsUnion document */
  upsert?: InputMaybe<GeneralPagesectionsUnionUpsertWithNestedWhereUniqueInput>;
};

export type GeneralPagesectionsUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  BeliefsSection?: InputMaybe<BeliefsSectionUpdateWithNestedWhereUniqueAndPositionInput>;
  CardListSection?: InputMaybe<CardListSectionUpdateWithNestedWhereUniqueAndPositionInput>;
  ContactFormSection?: InputMaybe<ContactFormSectionUpdateWithNestedWhereUniqueAndPositionInput>;
  PersonalOverviewSection?: InputMaybe<PersonalOverviewSectionUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type GeneralPagesectionsUnionUpdateWithNestedWhereUniqueInput = {
  BeliefsSection?: InputMaybe<BeliefsSectionUpdateWithNestedWhereUniqueInput>;
  CardListSection?: InputMaybe<CardListSectionUpdateWithNestedWhereUniqueInput>;
  ContactFormSection?: InputMaybe<ContactFormSectionUpdateWithNestedWhereUniqueInput>;
  PersonalOverviewSection?: InputMaybe<PersonalOverviewSectionUpdateWithNestedWhereUniqueInput>;
};

export type GeneralPagesectionsUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  BeliefsSection?: InputMaybe<BeliefsSectionUpsertWithNestedWhereUniqueAndPositionInput>;
  CardListSection?: InputMaybe<CardListSectionUpsertWithNestedWhereUniqueAndPositionInput>;
  ContactFormSection?: InputMaybe<ContactFormSectionUpsertWithNestedWhereUniqueAndPositionInput>;
  PersonalOverviewSection?: InputMaybe<PersonalOverviewSectionUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type GeneralPagesectionsUnionUpsertWithNestedWhereUniqueInput = {
  BeliefsSection?: InputMaybe<BeliefsSectionUpsertWithNestedWhereUniqueInput>;
  CardListSection?: InputMaybe<CardListSectionUpsertWithNestedWhereUniqueInput>;
  ContactFormSection?: InputMaybe<ContactFormSectionUpsertWithNestedWhereUniqueInput>;
  PersonalOverviewSection?: InputMaybe<PersonalOverviewSectionUpsertWithNestedWhereUniqueInput>;
};

export type GeneralPagesectionsUnionWhereInput = {
  BeliefsSection?: InputMaybe<BeliefsSectionWhereInput>;
  CardListSection?: InputMaybe<CardListSectionWhereInput>;
  ContactFormSection?: InputMaybe<ContactFormSectionWhereInput>;
  PersonalOverviewSection?: InputMaybe<PersonalOverviewSectionWhereInput>;
};

export type GeneralPagesectionsUnionWhereUniqueInput = {
  BeliefsSection?: InputMaybe<BeliefsSectionWhereUniqueInput>;
  CardListSection?: InputMaybe<CardListSectionWhereUniqueInput>;
  ContactFormSection?: InputMaybe<ContactFormSectionWhereUniqueInput>;
  PersonalOverviewSection?: InputMaybe<PersonalOverviewSectionWhereUniqueInput>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']['input']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

export type ListSectionItems = Company | EducationalInstitution | Project;

export type ListSectionItemsConnectInput = {
  Company?: InputMaybe<CompanyConnectInput>;
  EducationalInstitution?: InputMaybe<EducationalInstitutionConnectInput>;
  Project?: InputMaybe<ProjectConnectInput>;
};

export type ListSectionItemsCreateInput = {
  Company?: InputMaybe<CompanyCreateInput>;
  EducationalInstitution?: InputMaybe<EducationalInstitutionCreateInput>;
  Project?: InputMaybe<ProjectCreateInput>;
};

export type ListSectionItemsCreateManyInlineInput = {
  /** Connect multiple existing ListSectionItems documents */
  connect?: InputMaybe<Array<ListSectionItemsWhereUniqueInput>>;
  /** Create and connect multiple existing ListSectionItems documents */
  create?: InputMaybe<Array<ListSectionItemsCreateInput>>;
};

export type ListSectionItemsCreateOneInlineInput = {
  /** Connect one existing ListSectionItems document */
  connect?: InputMaybe<ListSectionItemsWhereUniqueInput>;
  /** Create and connect one ListSectionItems document */
  create?: InputMaybe<ListSectionItemsCreateInput>;
};

export type ListSectionItemsUpdateInput = {
  Company?: InputMaybe<CompanyUpdateInput>;
  EducationalInstitution?: InputMaybe<EducationalInstitutionUpdateInput>;
  Project?: InputMaybe<ProjectUpdateInput>;
};

export type ListSectionItemsUpdateManyInlineInput = {
  /** Connect multiple existing ListSectionItems documents */
  connect?: InputMaybe<Array<ListSectionItemsConnectInput>>;
  /** Create and connect multiple ListSectionItems documents */
  create?: InputMaybe<Array<ListSectionItemsCreateInput>>;
  /** Delete multiple ListSectionItems documents */
  delete?: InputMaybe<Array<ListSectionItemsWhereUniqueInput>>;
  /** Disconnect multiple ListSectionItems documents */
  disconnect?: InputMaybe<Array<ListSectionItemsWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ListSectionItems documents */
  set?: InputMaybe<Array<ListSectionItemsWhereUniqueInput>>;
  /** Update multiple ListSectionItems documents */
  update?: InputMaybe<Array<ListSectionItemsUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ListSectionItems documents */
  upsert?: InputMaybe<Array<ListSectionItemsUpsertWithNestedWhereUniqueInput>>;
};

export type ListSectionItemsUpdateManyWithNestedWhereInput = {
  Company?: InputMaybe<CompanyUpdateManyWithNestedWhereInput>;
  EducationalInstitution?: InputMaybe<EducationalInstitutionUpdateManyWithNestedWhereInput>;
  Project?: InputMaybe<ProjectUpdateManyWithNestedWhereInput>;
};

export type ListSectionItemsUpdateOneInlineInput = {
  /** Connect existing ListSectionItems document */
  connect?: InputMaybe<ListSectionItemsWhereUniqueInput>;
  /** Create and connect one ListSectionItems document */
  create?: InputMaybe<ListSectionItemsCreateInput>;
  /** Delete currently connected ListSectionItems document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ListSectionItems document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ListSectionItems document */
  update?: InputMaybe<ListSectionItemsUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ListSectionItems document */
  upsert?: InputMaybe<ListSectionItemsUpsertWithNestedWhereUniqueInput>;
};

export type ListSectionItemsUpdateWithNestedWhereUniqueInput = {
  Company?: InputMaybe<CompanyUpdateWithNestedWhereUniqueInput>;
  EducationalInstitution?: InputMaybe<EducationalInstitutionUpdateWithNestedWhereUniqueInput>;
  Project?: InputMaybe<ProjectUpdateWithNestedWhereUniqueInput>;
};

export type ListSectionItemsUpsertWithNestedWhereUniqueInput = {
  Company?: InputMaybe<CompanyUpsertWithNestedWhereUniqueInput>;
  EducationalInstitution?: InputMaybe<EducationalInstitutionUpsertWithNestedWhereUniqueInput>;
  Project?: InputMaybe<ProjectUpsertWithNestedWhereUniqueInput>;
};

export type ListSectionItemsWhereInput = {
  Company?: InputMaybe<CompanyWhereInput>;
  EducationalInstitution?: InputMaybe<EducationalInstitutionWhereInput>;
  Project?: InputMaybe<ProjectWhereInput>;
};

export type ListSectionItemsWhereUniqueInput = {
  Company?: InputMaybe<CompanyWhereUniqueInput>;
  EducationalInstitution?: InputMaybe<EducationalInstitutionWhereUniqueInput>;
  Project?: InputMaybe<ProjectWhereUniqueInput>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

/** Details about a particular location. */
export type LocationItem = Entity & {
  __typename?: 'LocationItem';
  /** The name of the city. */
  city: Scalars['String']['output'];
  /** The geo coordinates for the location. */
  coordinates: Location;
  /** The name of the country. */
  country: Scalars['String']['output'];
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System stage field */
  stage: Stage;
};

export type LocationItemConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: LocationItemWhereUniqueInput;
};

/** A connection to a list of items. */
export type LocationItemConnection = {
  __typename?: 'LocationItemConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<LocationItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type LocationItemCreateInput = {
  city: Scalars['String']['input'];
  coordinates: LocationInput;
  country: Scalars['String']['input'];
};

export type LocationItemCreateManyInlineInput = {
  /** Create and connect multiple existing LocationItem documents */
  create?: InputMaybe<Array<LocationItemCreateInput>>;
};

export type LocationItemCreateOneInlineInput = {
  /** Create and connect one LocationItem document */
  create?: InputMaybe<LocationItemCreateInput>;
};

export type LocationItemCreateWithPositionInput = {
  /** Document to create */
  data: LocationItemCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type LocationItemEdge = {
  __typename?: 'LocationItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: LocationItem;
};

/** Identifies documents */
export type LocationItemManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LocationItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LocationItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LocationItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  city_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  city_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  city_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  city_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  city_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  city_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  city_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  city_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  city_starts_with?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  country_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  country_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  country_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  country_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  country_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  country_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  country_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  country_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  country_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export enum LocationItemOrderByInput {
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  CountryAsc = 'country_ASC',
  CountryDesc = 'country_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type LocationItemParent = PersonalOverviewSection;

export type LocationItemParentConnectInput = {
  PersonalOverviewSection?: InputMaybe<PersonalOverviewSectionConnectInput>;
};

export type LocationItemParentCreateInput = {
  PersonalOverviewSection?: InputMaybe<PersonalOverviewSectionCreateInput>;
};

export type LocationItemParentCreateManyInlineInput = {
  /** Create and connect multiple existing LocationItemParent documents */
  create?: InputMaybe<Array<LocationItemParentCreateInput>>;
};

export type LocationItemParentCreateOneInlineInput = {
  /** Create and connect one LocationItemParent document */
  create?: InputMaybe<LocationItemParentCreateInput>;
};

export type LocationItemParentCreateWithPositionInput = {
  PersonalOverviewSection?: InputMaybe<PersonalOverviewSectionCreateWithPositionInput>;
};

export type LocationItemParentUpdateInput = {
  PersonalOverviewSection?: InputMaybe<PersonalOverviewSectionUpdateInput>;
};

export type LocationItemParentUpdateManyInlineInput = {
  /** Create and connect multiple LocationItemParent component instances */
  create?: InputMaybe<Array<LocationItemParentCreateWithPositionInput>>;
  /** Delete multiple LocationItemParent documents */
  delete?: InputMaybe<Array<LocationItemParentWhereUniqueInput>>;
  /** Update multiple LocationItemParent component instances */
  update?: InputMaybe<Array<LocationItemParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple LocationItemParent component instances */
  upsert?: InputMaybe<Array<LocationItemParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type LocationItemParentUpdateManyWithNestedWhereInput = {
  PersonalOverviewSection?: InputMaybe<PersonalOverviewSectionUpdateManyWithNestedWhereInput>;
};

export type LocationItemParentUpdateOneInlineInput = {
  /** Create and connect one LocationItemParent document */
  create?: InputMaybe<LocationItemParentCreateInput>;
  /** Delete currently connected LocationItemParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single LocationItemParent document */
  update?: InputMaybe<LocationItemParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single LocationItemParent document */
  upsert?: InputMaybe<LocationItemParentUpsertWithNestedWhereUniqueInput>;
};

export type LocationItemParentUpdateWithNestedWhereUniqueAndPositionInput = {
  PersonalOverviewSection?: InputMaybe<PersonalOverviewSectionUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type LocationItemParentUpdateWithNestedWhereUniqueInput = {
  PersonalOverviewSection?: InputMaybe<PersonalOverviewSectionUpdateWithNestedWhereUniqueInput>;
};

export type LocationItemParentUpsertWithNestedWhereUniqueAndPositionInput = {
  PersonalOverviewSection?: InputMaybe<PersonalOverviewSectionUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type LocationItemParentUpsertWithNestedWhereUniqueInput = {
  PersonalOverviewSection?: InputMaybe<PersonalOverviewSectionUpsertWithNestedWhereUniqueInput>;
};

export type LocationItemParentWhereInput = {
  PersonalOverviewSection?: InputMaybe<PersonalOverviewSectionWhereInput>;
};

export type LocationItemParentWhereUniqueInput = {
  PersonalOverviewSection?: InputMaybe<PersonalOverviewSectionWhereUniqueInput>;
};

export type LocationItemUpdateInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  coordinates?: InputMaybe<LocationInput>;
  country?: InputMaybe<Scalars['String']['input']>;
};

export type LocationItemUpdateManyInlineInput = {
  /** Create and connect multiple LocationItem component instances */
  create?: InputMaybe<Array<LocationItemCreateWithPositionInput>>;
  /** Delete multiple LocationItem documents */
  delete?: InputMaybe<Array<LocationItemWhereUniqueInput>>;
  /** Update multiple LocationItem component instances */
  update?: InputMaybe<Array<LocationItemUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple LocationItem component instances */
  upsert?: InputMaybe<Array<LocationItemUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type LocationItemUpdateManyInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  coordinates?: InputMaybe<LocationInput>;
  country?: InputMaybe<Scalars['String']['input']>;
};

export type LocationItemUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: LocationItemUpdateManyInput;
  /** Document search */
  where: LocationItemWhereInput;
};

export type LocationItemUpdateOneInlineInput = {
  /** Create and connect one LocationItem document */
  create?: InputMaybe<LocationItemCreateInput>;
  /** Delete currently connected LocationItem document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single LocationItem document */
  update?: InputMaybe<LocationItemUpdateWithNestedWhereUniqueInput>;
  /** Upsert single LocationItem document */
  upsert?: InputMaybe<LocationItemUpsertWithNestedWhereUniqueInput>;
};

export type LocationItemUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<LocationItemUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: LocationItemWhereUniqueInput;
};

export type LocationItemUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: LocationItemUpdateInput;
  /** Unique document search */
  where: LocationItemWhereUniqueInput;
};

export type LocationItemUpsertInput = {
  /** Create document if it didn't exist */
  create: LocationItemCreateInput;
  /** Update document if it exists */
  update: LocationItemUpdateInput;
};

export type LocationItemUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<LocationItemUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: LocationItemWhereUniqueInput;
};

export type LocationItemUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: LocationItemUpsertInput;
  /** Unique document search */
  where: LocationItemWhereUniqueInput;
};

/** Identifies documents */
export type LocationItemWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LocationItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LocationItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LocationItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  city_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  city_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  city_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  city_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  city_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  city_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  city_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  city_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  city_starts_with?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  country_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  country_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  country_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  country_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  country_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  country_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  country_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  country_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  country_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

/** References LocationItem record uniquely */
export type LocationItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** A set of different versions of a logo. */
export type LogoSet = Entity & {
  __typename?: 'LogoSet';
  /** A smaller/icon-sized logo for the set in PNG format. */
  icon?: Maybe<Asset>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The primary logo for the set in PNG format. */
  primary?: Maybe<Asset>;
  /** System stage field */
  stage: Stage;
};


/** A set of different versions of a logo. */
export type LogoSetIconArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** A set of different versions of a logo. */
export type LogoSetPrimaryArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type LogoSetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: LogoSetWhereUniqueInput;
};

/** A connection to a list of items. */
export type LogoSetConnection = {
  __typename?: 'LogoSetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<LogoSetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type LogoSetCreateInput = {
  icon?: InputMaybe<AssetCreateOneInlineInput>;
  primary?: InputMaybe<AssetCreateOneInlineInput>;
};

export type LogoSetCreateManyInlineInput = {
  /** Create and connect multiple existing LogoSet documents */
  create?: InputMaybe<Array<LogoSetCreateInput>>;
};

export type LogoSetCreateOneInlineInput = {
  /** Create and connect one LogoSet document */
  create?: InputMaybe<LogoSetCreateInput>;
};

export type LogoSetCreateWithPositionInput = {
  /** Document to create */
  data: LogoSetCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type LogoSetEdge = {
  __typename?: 'LogoSetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: LogoSet;
};

/** Identifies documents */
export type LogoSetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LogoSetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LogoSetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LogoSetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  primary?: InputMaybe<AssetWhereInput>;
};

export enum LogoSetOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type LogoSetParent = Company | EducationalInstitution | Project | Technology;

export type LogoSetParentConnectInput = {
  Company?: InputMaybe<CompanyConnectInput>;
  EducationalInstitution?: InputMaybe<EducationalInstitutionConnectInput>;
  Project?: InputMaybe<ProjectConnectInput>;
  Technology?: InputMaybe<TechnologyConnectInput>;
};

export type LogoSetParentCreateInput = {
  Company?: InputMaybe<CompanyCreateInput>;
  EducationalInstitution?: InputMaybe<EducationalInstitutionCreateInput>;
  Project?: InputMaybe<ProjectCreateInput>;
  Technology?: InputMaybe<TechnologyCreateInput>;
};

export type LogoSetParentCreateManyInlineInput = {
  /** Connect multiple existing LogoSetParent documents */
  connect?: InputMaybe<Array<LogoSetParentWhereUniqueInput>>;
  /** Create and connect multiple existing LogoSetParent documents */
  create?: InputMaybe<Array<LogoSetParentCreateInput>>;
};

export type LogoSetParentCreateOneInlineInput = {
  /** Connect one existing LogoSetParent document */
  connect?: InputMaybe<LogoSetParentWhereUniqueInput>;
  /** Create and connect one LogoSetParent document */
  create?: InputMaybe<LogoSetParentCreateInput>;
};

export type LogoSetParentUpdateInput = {
  Company?: InputMaybe<CompanyUpdateInput>;
  EducationalInstitution?: InputMaybe<EducationalInstitutionUpdateInput>;
  Project?: InputMaybe<ProjectUpdateInput>;
  Technology?: InputMaybe<TechnologyUpdateInput>;
};

export type LogoSetParentUpdateManyInlineInput = {
  /** Connect multiple existing LogoSetParent documents */
  connect?: InputMaybe<Array<LogoSetParentConnectInput>>;
  /** Create and connect multiple LogoSetParent documents */
  create?: InputMaybe<Array<LogoSetParentCreateInput>>;
  /** Delete multiple LogoSetParent documents */
  delete?: InputMaybe<Array<LogoSetParentWhereUniqueInput>>;
  /** Disconnect multiple LogoSetParent documents */
  disconnect?: InputMaybe<Array<LogoSetParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing LogoSetParent documents */
  set?: InputMaybe<Array<LogoSetParentWhereUniqueInput>>;
  /** Update multiple LogoSetParent documents */
  update?: InputMaybe<Array<LogoSetParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple LogoSetParent documents */
  upsert?: InputMaybe<Array<LogoSetParentUpsertWithNestedWhereUniqueInput>>;
};

export type LogoSetParentUpdateManyWithNestedWhereInput = {
  Company?: InputMaybe<CompanyUpdateManyWithNestedWhereInput>;
  EducationalInstitution?: InputMaybe<EducationalInstitutionUpdateManyWithNestedWhereInput>;
  Project?: InputMaybe<ProjectUpdateManyWithNestedWhereInput>;
  Technology?: InputMaybe<TechnologyUpdateManyWithNestedWhereInput>;
};

export type LogoSetParentUpdateOneInlineInput = {
  /** Connect existing LogoSetParent document */
  connect?: InputMaybe<LogoSetParentWhereUniqueInput>;
  /** Create and connect one LogoSetParent document */
  create?: InputMaybe<LogoSetParentCreateInput>;
  /** Delete currently connected LogoSetParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected LogoSetParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single LogoSetParent document */
  update?: InputMaybe<LogoSetParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single LogoSetParent document */
  upsert?: InputMaybe<LogoSetParentUpsertWithNestedWhereUniqueInput>;
};

export type LogoSetParentUpdateWithNestedWhereUniqueInput = {
  Company?: InputMaybe<CompanyUpdateWithNestedWhereUniqueInput>;
  EducationalInstitution?: InputMaybe<EducationalInstitutionUpdateWithNestedWhereUniqueInput>;
  Project?: InputMaybe<ProjectUpdateWithNestedWhereUniqueInput>;
  Technology?: InputMaybe<TechnologyUpdateWithNestedWhereUniqueInput>;
};

export type LogoSetParentUpsertWithNestedWhereUniqueInput = {
  Company?: InputMaybe<CompanyUpsertWithNestedWhereUniqueInput>;
  EducationalInstitution?: InputMaybe<EducationalInstitutionUpsertWithNestedWhereUniqueInput>;
  Project?: InputMaybe<ProjectUpsertWithNestedWhereUniqueInput>;
  Technology?: InputMaybe<TechnologyUpsertWithNestedWhereUniqueInput>;
};

export type LogoSetParentWhereInput = {
  Company?: InputMaybe<CompanyWhereInput>;
  EducationalInstitution?: InputMaybe<EducationalInstitutionWhereInput>;
  Project?: InputMaybe<ProjectWhereInput>;
  Technology?: InputMaybe<TechnologyWhereInput>;
};

export type LogoSetParentWhereUniqueInput = {
  Company?: InputMaybe<CompanyWhereUniqueInput>;
  EducationalInstitution?: InputMaybe<EducationalInstitutionWhereUniqueInput>;
  Project?: InputMaybe<ProjectWhereUniqueInput>;
  Technology?: InputMaybe<TechnologyWhereUniqueInput>;
};

export type LogoSetUpdateInput = {
  icon?: InputMaybe<AssetUpdateOneInlineInput>;
  primary?: InputMaybe<AssetUpdateOneInlineInput>;
};

export type LogoSetUpdateManyInlineInput = {
  /** Create and connect multiple LogoSet component instances */
  create?: InputMaybe<Array<LogoSetCreateWithPositionInput>>;
  /** Delete multiple LogoSet documents */
  delete?: InputMaybe<Array<LogoSetWhereUniqueInput>>;
  /** Update multiple LogoSet component instances */
  update?: InputMaybe<Array<LogoSetUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple LogoSet component instances */
  upsert?: InputMaybe<Array<LogoSetUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type LogoSetUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type LogoSetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: LogoSetUpdateManyInput;
  /** Document search */
  where: LogoSetWhereInput;
};

export type LogoSetUpdateOneInlineInput = {
  /** Create and connect one LogoSet document */
  create?: InputMaybe<LogoSetCreateInput>;
  /** Delete currently connected LogoSet document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single LogoSet document */
  update?: InputMaybe<LogoSetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single LogoSet document */
  upsert?: InputMaybe<LogoSetUpsertWithNestedWhereUniqueInput>;
};

export type LogoSetUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<LogoSetUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: LogoSetWhereUniqueInput;
};

export type LogoSetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: LogoSetUpdateInput;
  /** Unique document search */
  where: LogoSetWhereUniqueInput;
};

export type LogoSetUpsertInput = {
  /** Create document if it didn't exist */
  create: LogoSetCreateInput;
  /** Update document if it exists */
  update: LogoSetUpdateInput;
};

export type LogoSetUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<LogoSetUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: LogoSetWhereUniqueInput;
};

export type LogoSetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: LogoSetUpsertInput;
  /** Unique document search */
  where: LogoSetWhereUniqueInput;
};

/** Identifies documents */
export type LogoSetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LogoSetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LogoSetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LogoSetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  primary?: InputMaybe<AssetWhereInput>;
};

/** References LogoSet record uniquely */
export type LogoSetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one company */
  createCompany?: Maybe<Company>;
  /** Create one course */
  createCourse?: Maybe<Course>;
  /** Create one educationalInstitution */
  createEducationalInstitution?: Maybe<EducationalInstitution>;
  /** Create one generalPage */
  createGeneralPage?: Maybe<GeneralPage>;
  /** Create one project */
  createProject?: Maybe<Project>;
  /** Create one qualification */
  createQualification?: Maybe<Qualification>;
  /** Create one resume */
  createResume?: Maybe<Resume>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one technology */
  createTechnology?: Maybe<Technology>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one company from _all_ existing stages. Returns deleted document. */
  deleteCompany?: Maybe<Company>;
  /** Delete one course from _all_ existing stages. Returns deleted document. */
  deleteCourse?: Maybe<Course>;
  /** Delete one educationalInstitution from _all_ existing stages. Returns deleted document. */
  deleteEducationalInstitution?: Maybe<EducationalInstitution>;
  /** Delete one generalPage from _all_ existing stages. Returns deleted document. */
  deleteGeneralPage?: Maybe<GeneralPage>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Company documents
   * @deprecated Please use the new paginated many mutation (deleteManyCompaniesConnection)
   */
  deleteManyCompanies: BatchPayload;
  /** Delete many Company documents, return deleted documents */
  deleteManyCompaniesConnection: CompanyConnection;
  /**
   * Delete many Course documents
   * @deprecated Please use the new paginated many mutation (deleteManyCoursesConnection)
   */
  deleteManyCourses: BatchPayload;
  /** Delete many Course documents, return deleted documents */
  deleteManyCoursesConnection: CourseConnection;
  /**
   * Delete many EducationalInstitution documents
   * @deprecated Please use the new paginated many mutation (deleteManyEducationalInstitutionsConnection)
   */
  deleteManyEducationalInstitutions: BatchPayload;
  /** Delete many EducationalInstitution documents, return deleted documents */
  deleteManyEducationalInstitutionsConnection: EducationalInstitutionConnection;
  /**
   * Delete many GeneralPage documents
   * @deprecated Please use the new paginated many mutation (deleteManyGeneralPagesConnection)
   */
  deleteManyGeneralPages: BatchPayload;
  /** Delete many GeneralPage documents, return deleted documents */
  deleteManyGeneralPagesConnection: GeneralPageConnection;
  /**
   * Delete many Project documents
   * @deprecated Please use the new paginated many mutation (deleteManyProjectsConnection)
   */
  deleteManyProjects: BatchPayload;
  /** Delete many Project documents, return deleted documents */
  deleteManyProjectsConnection: ProjectConnection;
  /**
   * Delete many Qualification documents
   * @deprecated Please use the new paginated many mutation (deleteManyQualificationsConnection)
   */
  deleteManyQualifications: BatchPayload;
  /** Delete many Qualification documents, return deleted documents */
  deleteManyQualificationsConnection: QualificationConnection;
  /**
   * Delete many Resume documents
   * @deprecated Please use the new paginated many mutation (deleteManyResumesConnection)
   */
  deleteManyResumes: BatchPayload;
  /** Delete many Resume documents, return deleted documents */
  deleteManyResumesConnection: ResumeConnection;
  /**
   * Delete many Technology documents
   * @deprecated Please use the new paginated many mutation (deleteManyTechnologiesConnection)
   */
  deleteManyTechnologies: BatchPayload;
  /** Delete many Technology documents, return deleted documents */
  deleteManyTechnologiesConnection: TechnologyConnection;
  /** Delete one project from _all_ existing stages. Returns deleted document. */
  deleteProject?: Maybe<Project>;
  /** Delete one qualification from _all_ existing stages. Returns deleted document. */
  deleteQualification?: Maybe<Qualification>;
  /** Delete one resume from _all_ existing stages. Returns deleted document. */
  deleteResume?: Maybe<Resume>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one technology from _all_ existing stages. Returns deleted document. */
  deleteTechnology?: Maybe<Technology>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one company */
  publishCompany?: Maybe<Company>;
  /** Publish one course */
  publishCourse?: Maybe<Course>;
  /** Publish one educationalInstitution */
  publishEducationalInstitution?: Maybe<EducationalInstitution>;
  /** Publish one generalPage */
  publishGeneralPage?: Maybe<GeneralPage>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Company documents
   * @deprecated Please use the new paginated many mutation (publishManyCompaniesConnection)
   */
  publishManyCompanies: BatchPayload;
  /** Publish many Company documents */
  publishManyCompaniesConnection: CompanyConnection;
  /**
   * Publish many Course documents
   * @deprecated Please use the new paginated many mutation (publishManyCoursesConnection)
   */
  publishManyCourses: BatchPayload;
  /** Publish many Course documents */
  publishManyCoursesConnection: CourseConnection;
  /**
   * Publish many EducationalInstitution documents
   * @deprecated Please use the new paginated many mutation (publishManyEducationalInstitutionsConnection)
   */
  publishManyEducationalInstitutions: BatchPayload;
  /** Publish many EducationalInstitution documents */
  publishManyEducationalInstitutionsConnection: EducationalInstitutionConnection;
  /**
   * Publish many GeneralPage documents
   * @deprecated Please use the new paginated many mutation (publishManyGeneralPagesConnection)
   */
  publishManyGeneralPages: BatchPayload;
  /** Publish many GeneralPage documents */
  publishManyGeneralPagesConnection: GeneralPageConnection;
  /**
   * Publish many Project documents
   * @deprecated Please use the new paginated many mutation (publishManyProjectsConnection)
   */
  publishManyProjects: BatchPayload;
  /** Publish many Project documents */
  publishManyProjectsConnection: ProjectConnection;
  /**
   * Publish many Qualification documents
   * @deprecated Please use the new paginated many mutation (publishManyQualificationsConnection)
   */
  publishManyQualifications: BatchPayload;
  /** Publish many Qualification documents */
  publishManyQualificationsConnection: QualificationConnection;
  /**
   * Publish many Resume documents
   * @deprecated Please use the new paginated many mutation (publishManyResumesConnection)
   */
  publishManyResumes: BatchPayload;
  /** Publish many Resume documents */
  publishManyResumesConnection: ResumeConnection;
  /**
   * Publish many Technology documents
   * @deprecated Please use the new paginated many mutation (publishManyTechnologiesConnection)
   */
  publishManyTechnologies: BatchPayload;
  /** Publish many Technology documents */
  publishManyTechnologiesConnection: TechnologyConnection;
  /** Publish one project */
  publishProject?: Maybe<Project>;
  /** Publish one qualification */
  publishQualification?: Maybe<Qualification>;
  /** Publish one resume */
  publishResume?: Maybe<Resume>;
  /** Publish one technology */
  publishTechnology?: Maybe<Technology>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one company */
  schedulePublishCompany?: Maybe<Company>;
  /** Schedule to publish one course */
  schedulePublishCourse?: Maybe<Course>;
  /** Schedule to publish one educationalInstitution */
  schedulePublishEducationalInstitution?: Maybe<EducationalInstitution>;
  /** Schedule to publish one generalPage */
  schedulePublishGeneralPage?: Maybe<GeneralPage>;
  /** Schedule to publish one project */
  schedulePublishProject?: Maybe<Project>;
  /** Schedule to publish one qualification */
  schedulePublishQualification?: Maybe<Qualification>;
  /** Schedule to publish one resume */
  schedulePublishResume?: Maybe<Resume>;
  /** Schedule to publish one technology */
  schedulePublishTechnology?: Maybe<Technology>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one company from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCompany?: Maybe<Company>;
  /** Unpublish one course from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCourse?: Maybe<Course>;
  /** Unpublish one educationalInstitution from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishEducationalInstitution?: Maybe<EducationalInstitution>;
  /** Unpublish one generalPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishGeneralPage?: Maybe<GeneralPage>;
  /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProject?: Maybe<Project>;
  /** Unpublish one qualification from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishQualification?: Maybe<Qualification>;
  /** Unpublish one resume from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishResume?: Maybe<Resume>;
  /** Unpublish one technology from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishTechnology?: Maybe<Technology>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one company from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCompany?: Maybe<Company>;
  /** Unpublish one course from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCourse?: Maybe<Course>;
  /** Unpublish one educationalInstitution from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishEducationalInstitution?: Maybe<EducationalInstitution>;
  /** Unpublish one generalPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishGeneralPage?: Maybe<GeneralPage>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Company documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCompaniesConnection)
   */
  unpublishManyCompanies: BatchPayload;
  /** Find many Company documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCompaniesConnection: CompanyConnection;
  /**
   * Unpublish many Course documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCoursesConnection)
   */
  unpublishManyCourses: BatchPayload;
  /** Find many Course documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCoursesConnection: CourseConnection;
  /**
   * Unpublish many EducationalInstitution documents
   * @deprecated Please use the new paginated many mutation (unpublishManyEducationalInstitutionsConnection)
   */
  unpublishManyEducationalInstitutions: BatchPayload;
  /** Find many EducationalInstitution documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyEducationalInstitutionsConnection: EducationalInstitutionConnection;
  /**
   * Unpublish many GeneralPage documents
   * @deprecated Please use the new paginated many mutation (unpublishManyGeneralPagesConnection)
   */
  unpublishManyGeneralPages: BatchPayload;
  /** Find many GeneralPage documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyGeneralPagesConnection: GeneralPageConnection;
  /**
   * Unpublish many Project documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProjectsConnection)
   */
  unpublishManyProjects: BatchPayload;
  /** Find many Project documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProjectsConnection: ProjectConnection;
  /**
   * Unpublish many Qualification documents
   * @deprecated Please use the new paginated many mutation (unpublishManyQualificationsConnection)
   */
  unpublishManyQualifications: BatchPayload;
  /** Find many Qualification documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyQualificationsConnection: QualificationConnection;
  /**
   * Unpublish many Resume documents
   * @deprecated Please use the new paginated many mutation (unpublishManyResumesConnection)
   */
  unpublishManyResumes: BatchPayload;
  /** Find many Resume documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyResumesConnection: ResumeConnection;
  /**
   * Unpublish many Technology documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTechnologiesConnection)
   */
  unpublishManyTechnologies: BatchPayload;
  /** Find many Technology documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTechnologiesConnection: TechnologyConnection;
  /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProject?: Maybe<Project>;
  /** Unpublish one qualification from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishQualification?: Maybe<Qualification>;
  /** Unpublish one resume from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishResume?: Maybe<Resume>;
  /** Unpublish one technology from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTechnology?: Maybe<Technology>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one company */
  updateCompany?: Maybe<Company>;
  /** Update one course */
  updateCourse?: Maybe<Course>;
  /** Update one educationalInstitution */
  updateEducationalInstitution?: Maybe<EducationalInstitution>;
  /** Update one generalPage */
  updateGeneralPage?: Maybe<GeneralPage>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many companies
   * @deprecated Please use the new paginated many mutation (updateManyCompaniesConnection)
   */
  updateManyCompanies: BatchPayload;
  /** Update many Company documents */
  updateManyCompaniesConnection: CompanyConnection;
  /**
   * Update many courses
   * @deprecated Please use the new paginated many mutation (updateManyCoursesConnection)
   */
  updateManyCourses: BatchPayload;
  /** Update many Course documents */
  updateManyCoursesConnection: CourseConnection;
  /**
   * Update many educationalInstitutions
   * @deprecated Please use the new paginated many mutation (updateManyEducationalInstitutionsConnection)
   */
  updateManyEducationalInstitutions: BatchPayload;
  /** Update many EducationalInstitution documents */
  updateManyEducationalInstitutionsConnection: EducationalInstitutionConnection;
  /**
   * Update many generalPages
   * @deprecated Please use the new paginated many mutation (updateManyGeneralPagesConnection)
   */
  updateManyGeneralPages: BatchPayload;
  /** Update many GeneralPage documents */
  updateManyGeneralPagesConnection: GeneralPageConnection;
  /**
   * Update many projects
   * @deprecated Please use the new paginated many mutation (updateManyProjectsConnection)
   */
  updateManyProjects: BatchPayload;
  /** Update many Project documents */
  updateManyProjectsConnection: ProjectConnection;
  /**
   * Update many qualifications
   * @deprecated Please use the new paginated many mutation (updateManyQualificationsConnection)
   */
  updateManyQualifications: BatchPayload;
  /** Update many Qualification documents */
  updateManyQualificationsConnection: QualificationConnection;
  /**
   * Update many resumes
   * @deprecated Please use the new paginated many mutation (updateManyResumesConnection)
   */
  updateManyResumes: BatchPayload;
  /** Update many Resume documents */
  updateManyResumesConnection: ResumeConnection;
  /**
   * Update many technologies
   * @deprecated Please use the new paginated many mutation (updateManyTechnologiesConnection)
   */
  updateManyTechnologies: BatchPayload;
  /** Update many Technology documents */
  updateManyTechnologiesConnection: TechnologyConnection;
  /** Update one project */
  updateProject?: Maybe<Project>;
  /** Update one qualification */
  updateQualification?: Maybe<Qualification>;
  /** Update one resume */
  updateResume?: Maybe<Resume>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one technology */
  updateTechnology?: Maybe<Technology>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one company */
  upsertCompany?: Maybe<Company>;
  /** Upsert one course */
  upsertCourse?: Maybe<Course>;
  /** Upsert one educationalInstitution */
  upsertEducationalInstitution?: Maybe<EducationalInstitution>;
  /** Upsert one generalPage */
  upsertGeneralPage?: Maybe<GeneralPage>;
  /** Upsert one project */
  upsertProject?: Maybe<Project>;
  /** Upsert one qualification */
  upsertQualification?: Maybe<Qualification>;
  /** Upsert one resume */
  upsertResume?: Maybe<Resume>;
  /** Upsert one technology */
  upsertTechnology?: Maybe<Technology>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateCompanyArgs = {
  data: CompanyCreateInput;
};


export type MutationCreateCourseArgs = {
  data: CourseCreateInput;
};


export type MutationCreateEducationalInstitutionArgs = {
  data: EducationalInstitutionCreateInput;
};


export type MutationCreateGeneralPageArgs = {
  data: GeneralPageCreateInput;
};


export type MutationCreateProjectArgs = {
  data: ProjectCreateInput;
};


export type MutationCreateQualificationArgs = {
  data: QualificationCreateInput;
};


export type MutationCreateResumeArgs = {
  data: ResumeCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateTechnologyArgs = {
  data: TechnologyCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteCompanyArgs = {
  where: CompanyWhereUniqueInput;
};


export type MutationDeleteCourseArgs = {
  where: CourseWhereUniqueInput;
};


export type MutationDeleteEducationalInstitutionArgs = {
  where: EducationalInstitutionWhereUniqueInput;
};


export type MutationDeleteGeneralPageArgs = {
  where: GeneralPageWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyCompaniesArgs = {
  where?: InputMaybe<CompanyManyWhereInput>;
};


export type MutationDeleteManyCompaniesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyManyWhereInput>;
};


export type MutationDeleteManyCoursesArgs = {
  where?: InputMaybe<CourseManyWhereInput>;
};


export type MutationDeleteManyCoursesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CourseManyWhereInput>;
};


export type MutationDeleteManyEducationalInstitutionsArgs = {
  where?: InputMaybe<EducationalInstitutionManyWhereInput>;
};


export type MutationDeleteManyEducationalInstitutionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EducationalInstitutionManyWhereInput>;
};


export type MutationDeleteManyGeneralPagesArgs = {
  where?: InputMaybe<GeneralPageManyWhereInput>;
};


export type MutationDeleteManyGeneralPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GeneralPageManyWhereInput>;
};


export type MutationDeleteManyProjectsArgs = {
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationDeleteManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationDeleteManyQualificationsArgs = {
  where?: InputMaybe<QualificationManyWhereInput>;
};


export type MutationDeleteManyQualificationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QualificationManyWhereInput>;
};


export type MutationDeleteManyResumesArgs = {
  where?: InputMaybe<ResumeManyWhereInput>;
};


export type MutationDeleteManyResumesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ResumeManyWhereInput>;
};


export type MutationDeleteManyTechnologiesArgs = {
  where?: InputMaybe<TechnologyManyWhereInput>;
};


export type MutationDeleteManyTechnologiesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TechnologyManyWhereInput>;
};


export type MutationDeleteProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type MutationDeleteQualificationArgs = {
  where: QualificationWhereUniqueInput;
};


export type MutationDeleteResumeArgs = {
  where: ResumeWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteTechnologyArgs = {
  where: TechnologyWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishCompanyArgs = {
  to?: Array<Stage>;
  where: CompanyWhereUniqueInput;
};


export type MutationPublishCourseArgs = {
  to?: Array<Stage>;
  where: CourseWhereUniqueInput;
};


export type MutationPublishEducationalInstitutionArgs = {
  to?: Array<Stage>;
  where: EducationalInstitutionWhereUniqueInput;
};


export type MutationPublishGeneralPageArgs = {
  to?: Array<Stage>;
  where: GeneralPageWhereUniqueInput;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyCompaniesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<CompanyManyWhereInput>;
};


export type MutationPublishManyCompaniesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<CompanyManyWhereInput>;
};


export type MutationPublishManyCoursesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<CourseManyWhereInput>;
};


export type MutationPublishManyCoursesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<CourseManyWhereInput>;
};


export type MutationPublishManyEducationalInstitutionsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<EducationalInstitutionManyWhereInput>;
};


export type MutationPublishManyEducationalInstitutionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<EducationalInstitutionManyWhereInput>;
};


export type MutationPublishManyGeneralPagesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<GeneralPageManyWhereInput>;
};


export type MutationPublishManyGeneralPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<GeneralPageManyWhereInput>;
};


export type MutationPublishManyProjectsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationPublishManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationPublishManyQualificationsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<QualificationManyWhereInput>;
};


export type MutationPublishManyQualificationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<QualificationManyWhereInput>;
};


export type MutationPublishManyResumesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ResumeManyWhereInput>;
};


export type MutationPublishManyResumesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<ResumeManyWhereInput>;
};


export type MutationPublishManyTechnologiesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<TechnologyManyWhereInput>;
};


export type MutationPublishManyTechnologiesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<TechnologyManyWhereInput>;
};


export type MutationPublishProjectArgs = {
  to?: Array<Stage>;
  where: ProjectWhereUniqueInput;
};


export type MutationPublishQualificationArgs = {
  to?: Array<Stage>;
  where: QualificationWhereUniqueInput;
};


export type MutationPublishResumeArgs = {
  to?: Array<Stage>;
  where: ResumeWhereUniqueInput;
};


export type MutationPublishTechnologyArgs = {
  to?: Array<Stage>;
  where: TechnologyWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishCompanyArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: CompanyWhereUniqueInput;
};


export type MutationSchedulePublishCourseArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: CourseWhereUniqueInput;
};


export type MutationSchedulePublishEducationalInstitutionArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: EducationalInstitutionWhereUniqueInput;
};


export type MutationSchedulePublishGeneralPageArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: GeneralPageWhereUniqueInput;
};


export type MutationSchedulePublishProjectArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: ProjectWhereUniqueInput;
};


export type MutationSchedulePublishQualificationArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: QualificationWhereUniqueInput;
};


export type MutationSchedulePublishResumeArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: ResumeWhereUniqueInput;
};


export type MutationSchedulePublishTechnologyArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: TechnologyWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishCompanyArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: CompanyWhereUniqueInput;
};


export type MutationScheduleUnpublishCourseArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: CourseWhereUniqueInput;
};


export type MutationScheduleUnpublishEducationalInstitutionArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: EducationalInstitutionWhereUniqueInput;
};


export type MutationScheduleUnpublishGeneralPageArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: GeneralPageWhereUniqueInput;
};


export type MutationScheduleUnpublishProjectArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: ProjectWhereUniqueInput;
};


export type MutationScheduleUnpublishQualificationArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: QualificationWhereUniqueInput;
};


export type MutationScheduleUnpublishResumeArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: ResumeWhereUniqueInput;
};


export type MutationScheduleUnpublishTechnologyArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: TechnologyWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishCompanyArgs = {
  from?: Array<Stage>;
  where: CompanyWhereUniqueInput;
};


export type MutationUnpublishCourseArgs = {
  from?: Array<Stage>;
  where: CourseWhereUniqueInput;
};


export type MutationUnpublishEducationalInstitutionArgs = {
  from?: Array<Stage>;
  where: EducationalInstitutionWhereUniqueInput;
};


export type MutationUnpublishGeneralPageArgs = {
  from?: Array<Stage>;
  where: GeneralPageWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyCompaniesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<CompanyManyWhereInput>;
};


export type MutationUnpublishManyCompaniesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<CompanyManyWhereInput>;
};


export type MutationUnpublishManyCoursesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<CourseManyWhereInput>;
};


export type MutationUnpublishManyCoursesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<CourseManyWhereInput>;
};


export type MutationUnpublishManyEducationalInstitutionsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<EducationalInstitutionManyWhereInput>;
};


export type MutationUnpublishManyEducationalInstitutionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<EducationalInstitutionManyWhereInput>;
};


export type MutationUnpublishManyGeneralPagesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<GeneralPageManyWhereInput>;
};


export type MutationUnpublishManyGeneralPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<GeneralPageManyWhereInput>;
};


export type MutationUnpublishManyProjectsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationUnpublishManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationUnpublishManyQualificationsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<QualificationManyWhereInput>;
};


export type MutationUnpublishManyQualificationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<QualificationManyWhereInput>;
};


export type MutationUnpublishManyResumesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ResumeManyWhereInput>;
};


export type MutationUnpublishManyResumesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ResumeManyWhereInput>;
};


export type MutationUnpublishManyTechnologiesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<TechnologyManyWhereInput>;
};


export type MutationUnpublishManyTechnologiesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<TechnologyManyWhereInput>;
};


export type MutationUnpublishProjectArgs = {
  from?: Array<Stage>;
  where: ProjectWhereUniqueInput;
};


export type MutationUnpublishQualificationArgs = {
  from?: Array<Stage>;
  where: QualificationWhereUniqueInput;
};


export type MutationUnpublishResumeArgs = {
  from?: Array<Stage>;
  where: ResumeWhereUniqueInput;
};


export type MutationUnpublishTechnologyArgs = {
  from?: Array<Stage>;
  where: TechnologyWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateCompanyArgs = {
  data: CompanyUpdateInput;
  where: CompanyWhereUniqueInput;
};


export type MutationUpdateCourseArgs = {
  data: CourseUpdateInput;
  where: CourseWhereUniqueInput;
};


export type MutationUpdateEducationalInstitutionArgs = {
  data: EducationalInstitutionUpdateInput;
  where: EducationalInstitutionWhereUniqueInput;
};


export type MutationUpdateGeneralPageArgs = {
  data: GeneralPageUpdateInput;
  where: GeneralPageWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyCompaniesArgs = {
  data: CompanyUpdateManyInput;
  where?: InputMaybe<CompanyManyWhereInput>;
};


export type MutationUpdateManyCompaniesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: CompanyUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyManyWhereInput>;
};


export type MutationUpdateManyCoursesArgs = {
  data: CourseUpdateManyInput;
  where?: InputMaybe<CourseManyWhereInput>;
};


export type MutationUpdateManyCoursesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: CourseUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CourseManyWhereInput>;
};


export type MutationUpdateManyEducationalInstitutionsArgs = {
  data: EducationalInstitutionUpdateManyInput;
  where?: InputMaybe<EducationalInstitutionManyWhereInput>;
};


export type MutationUpdateManyEducationalInstitutionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: EducationalInstitutionUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EducationalInstitutionManyWhereInput>;
};


export type MutationUpdateManyGeneralPagesArgs = {
  data: GeneralPageUpdateManyInput;
  where?: InputMaybe<GeneralPageManyWhereInput>;
};


export type MutationUpdateManyGeneralPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: GeneralPageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GeneralPageManyWhereInput>;
};


export type MutationUpdateManyProjectsArgs = {
  data: ProjectUpdateManyInput;
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationUpdateManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: ProjectUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationUpdateManyQualificationsArgs = {
  data: QualificationUpdateManyInput;
  where?: InputMaybe<QualificationManyWhereInput>;
};


export type MutationUpdateManyQualificationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: QualificationUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QualificationManyWhereInput>;
};


export type MutationUpdateManyResumesArgs = {
  data: ResumeUpdateManyInput;
  where?: InputMaybe<ResumeManyWhereInput>;
};


export type MutationUpdateManyResumesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: ResumeUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ResumeManyWhereInput>;
};


export type MutationUpdateManyTechnologiesArgs = {
  data: TechnologyUpdateManyInput;
  where?: InputMaybe<TechnologyManyWhereInput>;
};


export type MutationUpdateManyTechnologiesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: TechnologyUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TechnologyManyWhereInput>;
};


export type MutationUpdateProjectArgs = {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};


export type MutationUpdateQualificationArgs = {
  data: QualificationUpdateInput;
  where: QualificationWhereUniqueInput;
};


export type MutationUpdateResumeArgs = {
  data: ResumeUpdateInput;
  where: ResumeWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateTechnologyArgs = {
  data: TechnologyUpdateInput;
  where: TechnologyWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertCompanyArgs = {
  upsert: CompanyUpsertInput;
  where: CompanyWhereUniqueInput;
};


export type MutationUpsertCourseArgs = {
  upsert: CourseUpsertInput;
  where: CourseWhereUniqueInput;
};


export type MutationUpsertEducationalInstitutionArgs = {
  upsert: EducationalInstitutionUpsertInput;
  where: EducationalInstitutionWhereUniqueInput;
};


export type MutationUpsertGeneralPageArgs = {
  upsert: GeneralPageUpsertInput;
  where: GeneralPageWhereUniqueInput;
};


export type MutationUpsertProjectArgs = {
  upsert: ProjectUpsertInput;
  where: ProjectWhereUniqueInput;
};


export type MutationUpsertQualificationArgs = {
  upsert: QualificationUpsertInput;
  where: QualificationWhereUniqueInput;
};


export type MutationUpsertResumeArgs = {
  upsert: ResumeUpsertInput;
  where: ResumeWhereUniqueInput;
};


export type MutationUpsertTechnologyArgs = {
  upsert: TechnologyUpsertInput;
  where: TechnologyWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** A section displaying an overview of items relating to me personally. */
export type PersonalOverviewSection = Entity & {
  __typename?: 'PersonalOverviewSection';
  /** A couple of paragraphs describing myself personally and professionally. */
  description: RichText;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The location where I am currently based. */
  location: LocationItem;
  /** My full name. */
  name: Scalars['String']['output'];
  /** A profile photo of myself. */
  profilePhoto: Asset;
  /** My personal pronouns. */
  pronouns: Scalars['String']['output'];
  /** System stage field */
  stage: Stage;
};


/** A section displaying an overview of items relating to me personally. */
export type PersonalOverviewSectionLocationArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** A section displaying an overview of items relating to me personally. */
export type PersonalOverviewSectionProfilePhotoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PersonalOverviewSectionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PersonalOverviewSectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type PersonalOverviewSectionConnection = {
  __typename?: 'PersonalOverviewSectionConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PersonalOverviewSectionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PersonalOverviewSectionCreateInput = {
  description: Scalars['RichTextAST']['input'];
  location: LocationItemCreateOneInlineInput;
  name: Scalars['String']['input'];
  profilePhoto: AssetCreateOneInlineInput;
  pronouns: Scalars['String']['input'];
};

export type PersonalOverviewSectionCreateManyInlineInput = {
  /** Create and connect multiple existing PersonalOverviewSection documents */
  create?: InputMaybe<Array<PersonalOverviewSectionCreateInput>>;
};

export type PersonalOverviewSectionCreateOneInlineInput = {
  /** Create and connect one PersonalOverviewSection document */
  create?: InputMaybe<PersonalOverviewSectionCreateInput>;
};

export type PersonalOverviewSectionCreateWithPositionInput = {
  /** Document to create */
  data: PersonalOverviewSectionCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type PersonalOverviewSectionEdge = {
  __typename?: 'PersonalOverviewSectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PersonalOverviewSection;
};

/** Identifies documents */
export type PersonalOverviewSectionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PersonalOverviewSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PersonalOverviewSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PersonalOverviewSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  location?: InputMaybe<LocationItemWhereInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  profilePhoto?: InputMaybe<AssetWhereInput>;
  pronouns?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  pronouns_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  pronouns_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  pronouns_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pronouns_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  pronouns_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  pronouns_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  pronouns_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  pronouns_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  pronouns_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum PersonalOverviewSectionOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PronounsAsc = 'pronouns_ASC',
  PronounsDesc = 'pronouns_DESC'
}

export type PersonalOverviewSectionParent = GeneralPage;

export type PersonalOverviewSectionParentConnectInput = {
  GeneralPage?: InputMaybe<GeneralPageConnectInput>;
};

export type PersonalOverviewSectionParentCreateInput = {
  GeneralPage?: InputMaybe<GeneralPageCreateInput>;
};

export type PersonalOverviewSectionParentCreateManyInlineInput = {
  /** Connect multiple existing PersonalOverviewSectionParent documents */
  connect?: InputMaybe<Array<PersonalOverviewSectionParentWhereUniqueInput>>;
  /** Create and connect multiple existing PersonalOverviewSectionParent documents */
  create?: InputMaybe<Array<PersonalOverviewSectionParentCreateInput>>;
};

export type PersonalOverviewSectionParentCreateOneInlineInput = {
  /** Connect one existing PersonalOverviewSectionParent document */
  connect?: InputMaybe<PersonalOverviewSectionParentWhereUniqueInput>;
  /** Create and connect one PersonalOverviewSectionParent document */
  create?: InputMaybe<PersonalOverviewSectionParentCreateInput>;
};

export type PersonalOverviewSectionParentUpdateInput = {
  GeneralPage?: InputMaybe<GeneralPageUpdateInput>;
};

export type PersonalOverviewSectionParentUpdateManyInlineInput = {
  /** Connect multiple existing PersonalOverviewSectionParent documents */
  connect?: InputMaybe<Array<PersonalOverviewSectionParentConnectInput>>;
  /** Create and connect multiple PersonalOverviewSectionParent documents */
  create?: InputMaybe<Array<PersonalOverviewSectionParentCreateInput>>;
  /** Delete multiple PersonalOverviewSectionParent documents */
  delete?: InputMaybe<Array<PersonalOverviewSectionParentWhereUniqueInput>>;
  /** Disconnect multiple PersonalOverviewSectionParent documents */
  disconnect?: InputMaybe<Array<PersonalOverviewSectionParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PersonalOverviewSectionParent documents */
  set?: InputMaybe<Array<PersonalOverviewSectionParentWhereUniqueInput>>;
  /** Update multiple PersonalOverviewSectionParent documents */
  update?: InputMaybe<Array<PersonalOverviewSectionParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PersonalOverviewSectionParent documents */
  upsert?: InputMaybe<Array<PersonalOverviewSectionParentUpsertWithNestedWhereUniqueInput>>;
};

export type PersonalOverviewSectionParentUpdateManyWithNestedWhereInput = {
  GeneralPage?: InputMaybe<GeneralPageUpdateManyWithNestedWhereInput>;
};

export type PersonalOverviewSectionParentUpdateOneInlineInput = {
  /** Connect existing PersonalOverviewSectionParent document */
  connect?: InputMaybe<PersonalOverviewSectionParentWhereUniqueInput>;
  /** Create and connect one PersonalOverviewSectionParent document */
  create?: InputMaybe<PersonalOverviewSectionParentCreateInput>;
  /** Delete currently connected PersonalOverviewSectionParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected PersonalOverviewSectionParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PersonalOverviewSectionParent document */
  update?: InputMaybe<PersonalOverviewSectionParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PersonalOverviewSectionParent document */
  upsert?: InputMaybe<PersonalOverviewSectionParentUpsertWithNestedWhereUniqueInput>;
};

export type PersonalOverviewSectionParentUpdateWithNestedWhereUniqueInput = {
  GeneralPage?: InputMaybe<GeneralPageUpdateWithNestedWhereUniqueInput>;
};

export type PersonalOverviewSectionParentUpsertWithNestedWhereUniqueInput = {
  GeneralPage?: InputMaybe<GeneralPageUpsertWithNestedWhereUniqueInput>;
};

export type PersonalOverviewSectionParentWhereInput = {
  GeneralPage?: InputMaybe<GeneralPageWhereInput>;
};

export type PersonalOverviewSectionParentWhereUniqueInput = {
  GeneralPage?: InputMaybe<GeneralPageWhereUniqueInput>;
};

export type PersonalOverviewSectionUpdateInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  location?: InputMaybe<LocationItemUpdateOneInlineInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  profilePhoto?: InputMaybe<AssetUpdateOneInlineInput>;
  pronouns?: InputMaybe<Scalars['String']['input']>;
};

export type PersonalOverviewSectionUpdateManyInlineInput = {
  /** Create and connect multiple PersonalOverviewSection component instances */
  create?: InputMaybe<Array<PersonalOverviewSectionCreateWithPositionInput>>;
  /** Delete multiple PersonalOverviewSection documents */
  delete?: InputMaybe<Array<PersonalOverviewSectionWhereUniqueInput>>;
  /** Update multiple PersonalOverviewSection component instances */
  update?: InputMaybe<Array<PersonalOverviewSectionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple PersonalOverviewSection component instances */
  upsert?: InputMaybe<Array<PersonalOverviewSectionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type PersonalOverviewSectionUpdateManyInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pronouns?: InputMaybe<Scalars['String']['input']>;
};

export type PersonalOverviewSectionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PersonalOverviewSectionUpdateManyInput;
  /** Document search */
  where: PersonalOverviewSectionWhereInput;
};

export type PersonalOverviewSectionUpdateOneInlineInput = {
  /** Create and connect one PersonalOverviewSection document */
  create?: InputMaybe<PersonalOverviewSectionCreateInput>;
  /** Delete currently connected PersonalOverviewSection document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PersonalOverviewSection document */
  update?: InputMaybe<PersonalOverviewSectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PersonalOverviewSection document */
  upsert?: InputMaybe<PersonalOverviewSectionUpsertWithNestedWhereUniqueInput>;
};

export type PersonalOverviewSectionUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<PersonalOverviewSectionUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: PersonalOverviewSectionWhereUniqueInput;
};

export type PersonalOverviewSectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PersonalOverviewSectionUpdateInput;
  /** Unique document search */
  where: PersonalOverviewSectionWhereUniqueInput;
};

export type PersonalOverviewSectionUpsertInput = {
  /** Create document if it didn't exist */
  create: PersonalOverviewSectionCreateInput;
  /** Update document if it exists */
  update: PersonalOverviewSectionUpdateInput;
};

export type PersonalOverviewSectionUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<PersonalOverviewSectionUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: PersonalOverviewSectionWhereUniqueInput;
};

export type PersonalOverviewSectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PersonalOverviewSectionUpsertInput;
  /** Unique document search */
  where: PersonalOverviewSectionWhereUniqueInput;
};

/** Identifies documents */
export type PersonalOverviewSectionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PersonalOverviewSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PersonalOverviewSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PersonalOverviewSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  location?: InputMaybe<LocationItemWhereInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  profilePhoto?: InputMaybe<AssetWhereInput>;
  pronouns?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  pronouns_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  pronouns_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  pronouns_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pronouns_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  pronouns_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  pronouns_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  pronouns_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  pronouns_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  pronouns_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References PersonalOverviewSection record uniquely */
export type PersonalOverviewSectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** A project that I have worked on independently or have had the majority of contribution to. */
export type Project = Entity & Node & {
  __typename?: 'Project';
  /** A set of colors reflecting the branding of the project. */
  colors?: Maybe<ColorSet>;
  /** The company that the company was worked on for. */
  company?: Maybe<Company>;
  /** The courses that this project was worked on for. */
  courses: Array<Course>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** A brief description about what the project is and its purpose. */
  description: Scalars['String']['output'];
  /** Get the document in other stages */
  documentInStages: Array<Project>;
  /** List of Project versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The primary logo and icon for the project. */
  logo?: Maybe<LogoSet>;
  /** The name of the project. */
  name: Scalars['String']['output'];
  /**
   * If the project was not related to a company or course, enable this to indication that it was a personal/hobby project.
   *
   * Note that the 'Company' and 'Courses' relationships below will be ignored if enabled.
   */
  personalProject?: Maybe<Scalars['Boolean']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** A unique identifier for the project to be used in the URL. */
  slug?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  /** Technologies that have been used or are currently being used for the project. */
  technologies: Array<ProjectTechnologies>;
  /** The duration where the project has been worked on. */
  timeFrame: DateRange;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** A project that I have worked on independently or have had the majority of contribution to. */
export type ProjectColorsArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** A project that I have worked on independently or have had the majority of contribution to. */
export type ProjectCompanyArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** A project that I have worked on independently or have had the majority of contribution to. */
export type ProjectCoursesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<CourseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CourseWhereInput>;
};


/** A project that I have worked on independently or have had the majority of contribution to. */
export type ProjectCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** A project that I have worked on independently or have had the majority of contribution to. */
export type ProjectDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** A project that I have worked on independently or have had the majority of contribution to. */
export type ProjectHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** A project that I have worked on independently or have had the majority of contribution to. */
export type ProjectLogoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** A project that I have worked on independently or have had the majority of contribution to. */
export type ProjectPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** A project that I have worked on independently or have had the majority of contribution to. */
export type ProjectScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** A project that I have worked on independently or have had the majority of contribution to. */
export type ProjectTechnologiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** A project that I have worked on independently or have had the majority of contribution to. */
export type ProjectTimeFrameArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** A project that I have worked on independently or have had the majority of contribution to. */
export type ProjectUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ProjectConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProjectWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProjectEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProjectCreateInput = {
  clw70imct0222072s9oyf6hq3?: InputMaybe<ResumeCreateManyInlineInput>;
  colors?: InputMaybe<ColorSetCreateOneInlineInput>;
  company?: InputMaybe<CompanyCreateOneInlineInput>;
  courses?: InputMaybe<CourseCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  logo?: InputMaybe<LogoSetCreateOneInlineInput>;
  name: Scalars['String']['input'];
  personalProject?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  technologies?: InputMaybe<ProjectTechnologiesCreateManyInlineInput>;
  timeFrame: DateRangeCreateOneInlineInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProjectCreateManyInlineInput = {
  /** Connect multiple existing Project documents */
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  /** Create and connect multiple existing Project documents */
  create?: InputMaybe<Array<ProjectCreateInput>>;
};

export type ProjectCreateOneInlineInput = {
  /** Connect one existing Project document */
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  /** Create and connect one Project document */
  create?: InputMaybe<ProjectCreateInput>;
};

/** An edge in a connection. */
export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Project;
};

/** Identifies documents */
export type ProjectManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  colors?: InputMaybe<ColorSetWhereInput>;
  company?: InputMaybe<CompanyWhereInput>;
  courses_every?: InputMaybe<CourseWhereInput>;
  courses_none?: InputMaybe<CourseWhereInput>;
  courses_some?: InputMaybe<CourseWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<ProjectWhereStageInput>;
  documentInStages_none?: InputMaybe<ProjectWhereStageInput>;
  documentInStages_some?: InputMaybe<ProjectWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  logo?: InputMaybe<LogoSetWhereInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  personalProject?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  personalProject_not?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty */
  technologies_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the union contains at least one connection to the provided item to the filter */
  technologies_some?: InputMaybe<ProjectTechnologiesWhereInput>;
  timeFrame?: InputMaybe<DateRangeWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ProjectOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PersonalProjectAsc = 'personalProject_ASC',
  PersonalProjectDesc = 'personalProject_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ProjectTechnologies = Technology;

export type ProjectTechnologiesConnectInput = {
  Technology?: InputMaybe<TechnologyConnectInput>;
};

export type ProjectTechnologiesCreateInput = {
  Technology?: InputMaybe<TechnologyCreateInput>;
};

export type ProjectTechnologiesCreateManyInlineInput = {
  /** Connect multiple existing ProjectTechnologies documents */
  connect?: InputMaybe<Array<ProjectTechnologiesWhereUniqueInput>>;
  /** Create and connect multiple existing ProjectTechnologies documents */
  create?: InputMaybe<Array<ProjectTechnologiesCreateInput>>;
};

export type ProjectTechnologiesCreateOneInlineInput = {
  /** Connect one existing ProjectTechnologies document */
  connect?: InputMaybe<ProjectTechnologiesWhereUniqueInput>;
  /** Create and connect one ProjectTechnologies document */
  create?: InputMaybe<ProjectTechnologiesCreateInput>;
};

export type ProjectTechnologiesUpdateInput = {
  Technology?: InputMaybe<TechnologyUpdateInput>;
};

export type ProjectTechnologiesUpdateManyInlineInput = {
  /** Connect multiple existing ProjectTechnologies documents */
  connect?: InputMaybe<Array<ProjectTechnologiesConnectInput>>;
  /** Create and connect multiple ProjectTechnologies documents */
  create?: InputMaybe<Array<ProjectTechnologiesCreateInput>>;
  /** Delete multiple ProjectTechnologies documents */
  delete?: InputMaybe<Array<ProjectTechnologiesWhereUniqueInput>>;
  /** Disconnect multiple ProjectTechnologies documents */
  disconnect?: InputMaybe<Array<ProjectTechnologiesWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ProjectTechnologies documents */
  set?: InputMaybe<Array<ProjectTechnologiesWhereUniqueInput>>;
  /** Update multiple ProjectTechnologies documents */
  update?: InputMaybe<Array<ProjectTechnologiesUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ProjectTechnologies documents */
  upsert?: InputMaybe<Array<ProjectTechnologiesUpsertWithNestedWhereUniqueInput>>;
};

export type ProjectTechnologiesUpdateManyWithNestedWhereInput = {
  Technology?: InputMaybe<TechnologyUpdateManyWithNestedWhereInput>;
};

export type ProjectTechnologiesUpdateOneInlineInput = {
  /** Connect existing ProjectTechnologies document */
  connect?: InputMaybe<ProjectTechnologiesWhereUniqueInput>;
  /** Create and connect one ProjectTechnologies document */
  create?: InputMaybe<ProjectTechnologiesCreateInput>;
  /** Delete currently connected ProjectTechnologies document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ProjectTechnologies document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ProjectTechnologies document */
  update?: InputMaybe<ProjectTechnologiesUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProjectTechnologies document */
  upsert?: InputMaybe<ProjectTechnologiesUpsertWithNestedWhereUniqueInput>;
};

export type ProjectTechnologiesUpdateWithNestedWhereUniqueInput = {
  Technology?: InputMaybe<TechnologyUpdateWithNestedWhereUniqueInput>;
};

export type ProjectTechnologiesUpsertWithNestedWhereUniqueInput = {
  Technology?: InputMaybe<TechnologyUpsertWithNestedWhereUniqueInput>;
};

export type ProjectTechnologiesWhereInput = {
  Technology?: InputMaybe<TechnologyWhereInput>;
};

export type ProjectTechnologiesWhereUniqueInput = {
  Technology?: InputMaybe<TechnologyWhereUniqueInput>;
};

export type ProjectUpdateInput = {
  clw70imct0222072s9oyf6hq3?: InputMaybe<ResumeUpdateManyInlineInput>;
  colors?: InputMaybe<ColorSetUpdateOneInlineInput>;
  company?: InputMaybe<CompanyUpdateOneInlineInput>;
  courses?: InputMaybe<CourseUpdateManyInlineInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<LogoSetUpdateOneInlineInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  personalProject?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  technologies?: InputMaybe<ProjectTechnologiesUpdateManyInlineInput>;
  timeFrame?: InputMaybe<DateRangeUpdateOneInlineInput>;
};

export type ProjectUpdateManyInlineInput = {
  /** Connect multiple existing Project documents */
  connect?: InputMaybe<Array<ProjectConnectInput>>;
  /** Create and connect multiple Project documents */
  create?: InputMaybe<Array<ProjectCreateInput>>;
  /** Delete multiple Project documents */
  delete?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  /** Disconnect multiple Project documents */
  disconnect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Project documents */
  set?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  /** Update multiple Project documents */
  update?: InputMaybe<Array<ProjectUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Project documents */
  upsert?: InputMaybe<Array<ProjectUpsertWithNestedWhereUniqueInput>>;
};

export type ProjectUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  personalProject?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProjectUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProjectUpdateManyInput;
  /** Document search */
  where: ProjectWhereInput;
};

export type ProjectUpdateOneInlineInput = {
  /** Connect existing Project document */
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  /** Create and connect one Project document */
  create?: InputMaybe<ProjectCreateInput>;
  /** Delete currently connected Project document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Project document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Project document */
  update?: InputMaybe<ProjectUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Project document */
  upsert?: InputMaybe<ProjectUpsertWithNestedWhereUniqueInput>;
};

export type ProjectUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProjectUpdateInput;
  /** Unique document search */
  where: ProjectWhereUniqueInput;
};

export type ProjectUpsertInput = {
  /** Create document if it didn't exist */
  create: ProjectCreateInput;
  /** Update document if it exists */
  update: ProjectUpdateInput;
};

export type ProjectUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProjectUpsertInput;
  /** Unique document search */
  where: ProjectWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ProjectWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ProjectWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  colors?: InputMaybe<ColorSetWhereInput>;
  company?: InputMaybe<CompanyWhereInput>;
  courses_every?: InputMaybe<CourseWhereInput>;
  courses_none?: InputMaybe<CourseWhereInput>;
  courses_some?: InputMaybe<CourseWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<ProjectWhereStageInput>;
  documentInStages_none?: InputMaybe<ProjectWhereStageInput>;
  documentInStages_some?: InputMaybe<ProjectWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  logo?: InputMaybe<LogoSetWhereInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  personalProject?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  personalProject_not?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty */
  technologies_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the union contains at least one connection to the provided item to the filter */
  technologies_some?: InputMaybe<ProjectTechnologiesWhereInput>;
  timeFrame?: InputMaybe<DateRangeWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ProjectWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ProjectWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Project record uniquely */
export type ProjectWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

/** A qualification I have been awarded. */
export type Qualification = Entity & Node & {
  __typename?: 'Qualification';
  /** The unique code for the qualification (if applicable). */
  code?: Maybe<Scalars['String']['output']>;
  /** The courses that comprised the requirements for the qualification. */
  courses: Array<Course>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** A description of the qualification. */
  description: Scalars['String']['output'];
  /** Get the document in other stages */
  documentInStages: Array<Qualification>;
  /** The educational institution that awarded the qualification. */
  educationalInstitution?: Maybe<EducationalInstitution>;
  /** An endorsement the qualification was awarded with (if applicable). */
  endorsement?: Maybe<Scalars['String']['output']>;
  /** List of Qualification versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The name of the qualification. */
  name: Scalars['String']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** A link to the web page for the qualification. */
  url: Scalars['String']['output'];
};


/** A qualification I have been awarded. */
export type QualificationCoursesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<CourseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CourseWhereInput>;
};


/** A qualification I have been awarded. */
export type QualificationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** A qualification I have been awarded. */
export type QualificationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** A qualification I have been awarded. */
export type QualificationEducationalInstitutionArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** A qualification I have been awarded. */
export type QualificationHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** A qualification I have been awarded. */
export type QualificationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** A qualification I have been awarded. */
export type QualificationScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** A qualification I have been awarded. */
export type QualificationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type QualificationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: QualificationWhereUniqueInput;
};

/** A connection to a list of items. */
export type QualificationConnection = {
  __typename?: 'QualificationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<QualificationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type QualificationCreateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  courses?: InputMaybe<CourseCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  educationalInstitution?: InputMaybe<EducationalInstitutionCreateOneInlineInput>;
  endorsement?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  url: Scalars['String']['input'];
};

export type QualificationCreateManyInlineInput = {
  /** Connect multiple existing Qualification documents */
  connect?: InputMaybe<Array<QualificationWhereUniqueInput>>;
  /** Create and connect multiple existing Qualification documents */
  create?: InputMaybe<Array<QualificationCreateInput>>;
};

export type QualificationCreateOneInlineInput = {
  /** Connect one existing Qualification document */
  connect?: InputMaybe<QualificationWhereUniqueInput>;
  /** Create and connect one Qualification document */
  create?: InputMaybe<QualificationCreateInput>;
};

/** An edge in a connection. */
export type QualificationEdge = {
  __typename?: 'QualificationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Qualification;
};

/** Identifies documents */
export type QualificationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<QualificationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<QualificationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<QualificationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  code_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  code_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  code_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  code_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  code_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  code_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  code_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  code_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  code_starts_with?: InputMaybe<Scalars['String']['input']>;
  courses_every?: InputMaybe<CourseWhereInput>;
  courses_none?: InputMaybe<CourseWhereInput>;
  courses_some?: InputMaybe<CourseWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<QualificationWhereStageInput>;
  documentInStages_none?: InputMaybe<QualificationWhereStageInput>;
  documentInStages_some?: InputMaybe<QualificationWhereStageInput>;
  educationalInstitution?: InputMaybe<EducationalInstitutionWhereInput>;
  endorsement?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  endorsement_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  endorsement_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  endorsement_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  endorsement_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  endorsement_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  endorsement_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  endorsement_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  endorsement_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  endorsement_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum QualificationOrderByInput {
  CodeAsc = 'code_ASC',
  CodeDesc = 'code_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  EndorsementAsc = 'endorsement_ASC',
  EndorsementDesc = 'endorsement_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type QualificationUpdateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  courses?: InputMaybe<CourseUpdateManyInlineInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  educationalInstitution?: InputMaybe<EducationalInstitutionUpdateOneInlineInput>;
  endorsement?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type QualificationUpdateManyInlineInput = {
  /** Connect multiple existing Qualification documents */
  connect?: InputMaybe<Array<QualificationConnectInput>>;
  /** Create and connect multiple Qualification documents */
  create?: InputMaybe<Array<QualificationCreateInput>>;
  /** Delete multiple Qualification documents */
  delete?: InputMaybe<Array<QualificationWhereUniqueInput>>;
  /** Disconnect multiple Qualification documents */
  disconnect?: InputMaybe<Array<QualificationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Qualification documents */
  set?: InputMaybe<Array<QualificationWhereUniqueInput>>;
  /** Update multiple Qualification documents */
  update?: InputMaybe<Array<QualificationUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Qualification documents */
  upsert?: InputMaybe<Array<QualificationUpsertWithNestedWhereUniqueInput>>;
};

export type QualificationUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  endorsement?: InputMaybe<Scalars['String']['input']>;
};

export type QualificationUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: QualificationUpdateManyInput;
  /** Document search */
  where: QualificationWhereInput;
};

export type QualificationUpdateOneInlineInput = {
  /** Connect existing Qualification document */
  connect?: InputMaybe<QualificationWhereUniqueInput>;
  /** Create and connect one Qualification document */
  create?: InputMaybe<QualificationCreateInput>;
  /** Delete currently connected Qualification document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Qualification document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Qualification document */
  update?: InputMaybe<QualificationUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Qualification document */
  upsert?: InputMaybe<QualificationUpsertWithNestedWhereUniqueInput>;
};

export type QualificationUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: QualificationUpdateInput;
  /** Unique document search */
  where: QualificationWhereUniqueInput;
};

export type QualificationUpsertInput = {
  /** Create document if it didn't exist */
  create: QualificationCreateInput;
  /** Update document if it exists */
  update: QualificationUpdateInput;
};

export type QualificationUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: QualificationUpsertInput;
  /** Unique document search */
  where: QualificationWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type QualificationWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type QualificationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<QualificationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<QualificationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<QualificationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  code_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  code_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  code_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  code_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  code_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  code_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  code_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  code_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  code_starts_with?: InputMaybe<Scalars['String']['input']>;
  courses_every?: InputMaybe<CourseWhereInput>;
  courses_none?: InputMaybe<CourseWhereInput>;
  courses_some?: InputMaybe<CourseWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<QualificationWhereStageInput>;
  documentInStages_none?: InputMaybe<QualificationWhereStageInput>;
  documentInStages_some?: InputMaybe<QualificationWhereStageInput>;
  educationalInstitution?: InputMaybe<EducationalInstitutionWhereInput>;
  endorsement?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  endorsement_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  endorsement_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  endorsement_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  endorsement_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  endorsement_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  endorsement_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  endorsement_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  endorsement_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  endorsement_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type QualificationWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<QualificationWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<QualificationWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<QualificationWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<QualificationWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Qualification record uniquely */
export type QualificationWhereUniqueInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve multiple companies */
  companies: Array<Company>;
  /** Retrieve multiple companies using the Relay connection interface */
  companiesConnection: CompanyConnection;
  /** Retrieve a single company */
  company?: Maybe<Company>;
  /** Retrieve document version */
  companyVersion?: Maybe<DocumentVersion>;
  /** Retrieve a single course */
  course?: Maybe<Course>;
  /** Retrieve document version */
  courseVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple courses */
  courses: Array<Course>;
  /** Retrieve multiple courses using the Relay connection interface */
  coursesConnection: CourseConnection;
  /** Retrieve a single educationalInstitution */
  educationalInstitution?: Maybe<EducationalInstitution>;
  /** Retrieve document version */
  educationalInstitutionVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple educationalInstitutions */
  educationalInstitutions: Array<EducationalInstitution>;
  /** Retrieve multiple educationalInstitutions using the Relay connection interface */
  educationalInstitutionsConnection: EducationalInstitutionConnection;
  /** Fetches an object given its ID */
  entities?: Maybe<Array<Entity>>;
  /** Retrieve a single generalPage */
  generalPage?: Maybe<GeneralPage>;
  /** Retrieve document version */
  generalPageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple generalPages */
  generalPages: Array<GeneralPage>;
  /** Retrieve multiple generalPages using the Relay connection interface */
  generalPagesConnection: GeneralPageConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single project */
  project?: Maybe<Project>;
  /** Retrieve document version */
  projectVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple projects */
  projects: Array<Project>;
  /** Retrieve multiple projects using the Relay connection interface */
  projectsConnection: ProjectConnection;
  /** Retrieve a single qualification */
  qualification?: Maybe<Qualification>;
  /** Retrieve document version */
  qualificationVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple qualifications */
  qualifications: Array<Qualification>;
  /** Retrieve multiple qualifications using the Relay connection interface */
  qualificationsConnection: QualificationConnection;
  /** Retrieve a single resume */
  resume?: Maybe<Resume>;
  /** Retrieve document version */
  resumeVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple resumes */
  resumes: Array<Resume>;
  /** Retrieve multiple resumes using the Relay connection interface */
  resumesConnection: ResumeConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve multiple technologies */
  technologies: Array<Technology>;
  /** Retrieve multiple technologies using the Relay connection interface */
  technologiesConnection: TechnologyConnection;
  /** Retrieve a single technology */
  technology?: Maybe<Technology>;
  /** Retrieve document version */
  technologyVersion?: Maybe<DocumentVersion>;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryCompaniesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CompanyOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<CompanyWhereInput>;
};


export type QueryCompaniesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CompanyOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<CompanyWhereInput>;
};


export type QueryCompanyArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CompanyWhereUniqueInput;
};


export type QueryCompanyVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCourseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CourseWhereUniqueInput;
};


export type QueryCourseVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCoursesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CourseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<CourseWhereInput>;
};


export type QueryCoursesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CourseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<CourseWhereInput>;
};


export type QueryEducationalInstitutionArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: EducationalInstitutionWhereUniqueInput;
};


export type QueryEducationalInstitutionVersionArgs = {
  where: VersionWhereInput;
};


export type QueryEducationalInstitutionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<EducationalInstitutionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<EducationalInstitutionWhereInput>;
};


export type QueryEducationalInstitutionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<EducationalInstitutionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<EducationalInstitutionWhereInput>;
};


export type QueryEntitiesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  where: Array<EntityWhereInput>;
};


export type QueryGeneralPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: GeneralPageWhereUniqueInput;
};


export type QueryGeneralPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryGeneralPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<GeneralPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<GeneralPageWhereInput>;
};


export type QueryGeneralPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<GeneralPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<GeneralPageWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryProjectArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ProjectWhereUniqueInput;
};


export type QueryProjectVersionArgs = {
  where: VersionWhereInput;
};


export type QueryProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProjectOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ProjectWhereInput>;
};


export type QueryProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProjectOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ProjectWhereInput>;
};


export type QueryQualificationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: QualificationWhereUniqueInput;
};


export type QueryQualificationVersionArgs = {
  where: VersionWhereInput;
};


export type QueryQualificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<QualificationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<QualificationWhereInput>;
};


export type QueryQualificationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<QualificationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<QualificationWhereInput>;
};


export type QueryResumeArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ResumeWhereUniqueInput;
};


export type QueryResumeVersionArgs = {
  where: VersionWhereInput;
};


export type QueryResumesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ResumeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ResumeWhereInput>;
};


export type QueryResumesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ResumeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ResumeWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryTechnologiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TechnologyOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<TechnologyWhereInput>;
};


export type QueryTechnologiesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TechnologyOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<TechnologyWhereInput>;
};


export type QueryTechnologyArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: TechnologyWhereUniqueInput;
};


export type QueryTechnologyVersionArgs = {
  where: VersionWhereInput;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency']['output'];
  b: Scalars['RGBAHue']['output'];
  g: Scalars['RGBAHue']['output'];
  r: Scalars['RGBAHue']['output'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency']['input'];
  b: Scalars['RGBAHue']['input'];
  g: Scalars['RGBAHue']['input'];
  r: Scalars['RGBAHue']['input'];
};

/** Configuration for the automatically generated resume PDF document. */
export type Resume = Entity & Node & {
  __typename?: 'Resume';
  /** Companies to include in the experience section of the resume. */
  companies: Array<Company>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Resume>;
  /** List of Resume versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The projects to include in the projects section of the resume. */
  projects: Array<Project>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** Technologies to include in the technical skills section of the resume. */
  technologies: Array<Technology>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Configuration for the automatically generated resume PDF document. */
export type ResumeCompaniesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<CompanyOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyWhereInput>;
};


/** Configuration for the automatically generated resume PDF document. */
export type ResumeCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Configuration for the automatically generated resume PDF document. */
export type ResumeDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Configuration for the automatically generated resume PDF document. */
export type ResumeHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Configuration for the automatically generated resume PDF document. */
export type ResumeProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProjectOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectWhereInput>;
};


/** Configuration for the automatically generated resume PDF document. */
export type ResumePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Configuration for the automatically generated resume PDF document. */
export type ResumeScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Configuration for the automatically generated resume PDF document. */
export type ResumeTechnologiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<TechnologyOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TechnologyWhereInput>;
};


/** Configuration for the automatically generated resume PDF document. */
export type ResumeUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ResumeConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ResumeWhereUniqueInput;
};

/** A connection to a list of items. */
export type ResumeConnection = {
  __typename?: 'ResumeConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ResumeEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ResumeCreateInput = {
  companies?: InputMaybe<CompanyCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  projects?: InputMaybe<ProjectCreateManyInlineInput>;
  technologies?: InputMaybe<TechnologyCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ResumeCreateManyInlineInput = {
  /** Connect multiple existing Resume documents */
  connect?: InputMaybe<Array<ResumeWhereUniqueInput>>;
  /** Create and connect multiple existing Resume documents */
  create?: InputMaybe<Array<ResumeCreateInput>>;
};

export type ResumeCreateOneInlineInput = {
  /** Connect one existing Resume document */
  connect?: InputMaybe<ResumeWhereUniqueInput>;
  /** Create and connect one Resume document */
  create?: InputMaybe<ResumeCreateInput>;
};

/** An edge in a connection. */
export type ResumeEdge = {
  __typename?: 'ResumeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Resume;
};

/** Identifies documents */
export type ResumeManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ResumeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ResumeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ResumeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  companies_every?: InputMaybe<CompanyWhereInput>;
  companies_none?: InputMaybe<CompanyWhereInput>;
  companies_some?: InputMaybe<CompanyWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ResumeWhereStageInput>;
  documentInStages_none?: InputMaybe<ResumeWhereStageInput>;
  documentInStages_some?: InputMaybe<ResumeWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  projects_every?: InputMaybe<ProjectWhereInput>;
  projects_none?: InputMaybe<ProjectWhereInput>;
  projects_some?: InputMaybe<ProjectWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  technologies_every?: InputMaybe<TechnologyWhereInput>;
  technologies_none?: InputMaybe<TechnologyWhereInput>;
  technologies_some?: InputMaybe<TechnologyWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ResumeOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ResumeUpdateInput = {
  companies?: InputMaybe<CompanyUpdateManyInlineInput>;
  projects?: InputMaybe<ProjectUpdateManyInlineInput>;
  technologies?: InputMaybe<TechnologyUpdateManyInlineInput>;
};

export type ResumeUpdateManyInlineInput = {
  /** Connect multiple existing Resume documents */
  connect?: InputMaybe<Array<ResumeConnectInput>>;
  /** Create and connect multiple Resume documents */
  create?: InputMaybe<Array<ResumeCreateInput>>;
  /** Delete multiple Resume documents */
  delete?: InputMaybe<Array<ResumeWhereUniqueInput>>;
  /** Disconnect multiple Resume documents */
  disconnect?: InputMaybe<Array<ResumeWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Resume documents */
  set?: InputMaybe<Array<ResumeWhereUniqueInput>>;
  /** Update multiple Resume documents */
  update?: InputMaybe<Array<ResumeUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Resume documents */
  upsert?: InputMaybe<Array<ResumeUpsertWithNestedWhereUniqueInput>>;
};

export type ResumeUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type ResumeUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ResumeUpdateManyInput;
  /** Document search */
  where: ResumeWhereInput;
};

export type ResumeUpdateOneInlineInput = {
  /** Connect existing Resume document */
  connect?: InputMaybe<ResumeWhereUniqueInput>;
  /** Create and connect one Resume document */
  create?: InputMaybe<ResumeCreateInput>;
  /** Delete currently connected Resume document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Resume document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Resume document */
  update?: InputMaybe<ResumeUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Resume document */
  upsert?: InputMaybe<ResumeUpsertWithNestedWhereUniqueInput>;
};

export type ResumeUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ResumeUpdateInput;
  /** Unique document search */
  where: ResumeWhereUniqueInput;
};

export type ResumeUpsertInput = {
  /** Create document if it didn't exist */
  create: ResumeCreateInput;
  /** Update document if it exists */
  update: ResumeUpdateInput;
};

export type ResumeUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ResumeUpsertInput;
  /** Unique document search */
  where: ResumeWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ResumeWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ResumeWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ResumeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ResumeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ResumeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  companies_every?: InputMaybe<CompanyWhereInput>;
  companies_none?: InputMaybe<CompanyWhereInput>;
  companies_some?: InputMaybe<CompanyWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ResumeWhereStageInput>;
  documentInStages_none?: InputMaybe<ResumeWhereStageInput>;
  documentInStages_some?: InputMaybe<ResumeWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  projects_every?: InputMaybe<ProjectWhereInput>;
  projects_none?: InputMaybe<ProjectWhereInput>;
  projects_some?: InputMaybe<ProjectWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  technologies_every?: InputMaybe<TechnologyWhereInput>;
  technologies_none?: InputMaybe<TechnologyWhereInput>;
  technologies_some?: InputMaybe<TechnologyWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ResumeWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ResumeWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ResumeWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ResumeWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ResumeWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Resume record uniquely */
export type ResumeWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String']['output'];
  /** Returns Markdown representation */
  markdown: Scalars['String']['output'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST']['output'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String']['output'];
};

/** For defining a role I have been in at a company. */
export type Role = Entity & {
  __typename?: 'Role';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System stage field */
  stage: Stage;
  /** The duration where I was in this role. */
  timeFrame?: Maybe<DateRange>;
  /** The title of the role. */
  title: Scalars['String']['output'];
};


/** For defining a role I have been in at a company. */
export type RoleTimeFrameArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type RoleConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: RoleWhereUniqueInput;
};

/** A connection to a list of items. */
export type RoleConnection = {
  __typename?: 'RoleConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<RoleEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type RoleCreateInput = {
  timeFrame?: InputMaybe<DateRangeCreateOneInlineInput>;
  title: Scalars['String']['input'];
};

export type RoleCreateManyInlineInput = {
  /** Create and connect multiple existing Role documents */
  create?: InputMaybe<Array<RoleCreateInput>>;
};

export type RoleCreateOneInlineInput = {
  /** Create and connect one Role document */
  create?: InputMaybe<RoleCreateInput>;
};

export type RoleCreateWithPositionInput = {
  /** Document to create */
  data: RoleCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type RoleEdge = {
  __typename?: 'RoleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Role;
};

/** Identifies documents */
export type RoleManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RoleWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RoleWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RoleWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  timeFrame?: InputMaybe<DateRangeWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum RoleOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type RoleParent = Company;

export type RoleParentConnectInput = {
  Company?: InputMaybe<CompanyConnectInput>;
};

export type RoleParentCreateInput = {
  Company?: InputMaybe<CompanyCreateInput>;
};

export type RoleParentCreateManyInlineInput = {
  /** Connect multiple existing RoleParent documents */
  connect?: InputMaybe<Array<RoleParentWhereUniqueInput>>;
  /** Create and connect multiple existing RoleParent documents */
  create?: InputMaybe<Array<RoleParentCreateInput>>;
};

export type RoleParentCreateOneInlineInput = {
  /** Connect one existing RoleParent document */
  connect?: InputMaybe<RoleParentWhereUniqueInput>;
  /** Create and connect one RoleParent document */
  create?: InputMaybe<RoleParentCreateInput>;
};

export type RoleParentUpdateInput = {
  Company?: InputMaybe<CompanyUpdateInput>;
};

export type RoleParentUpdateManyInlineInput = {
  /** Connect multiple existing RoleParent documents */
  connect?: InputMaybe<Array<RoleParentConnectInput>>;
  /** Create and connect multiple RoleParent documents */
  create?: InputMaybe<Array<RoleParentCreateInput>>;
  /** Delete multiple RoleParent documents */
  delete?: InputMaybe<Array<RoleParentWhereUniqueInput>>;
  /** Disconnect multiple RoleParent documents */
  disconnect?: InputMaybe<Array<RoleParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing RoleParent documents */
  set?: InputMaybe<Array<RoleParentWhereUniqueInput>>;
  /** Update multiple RoleParent documents */
  update?: InputMaybe<Array<RoleParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple RoleParent documents */
  upsert?: InputMaybe<Array<RoleParentUpsertWithNestedWhereUniqueInput>>;
};

export type RoleParentUpdateManyWithNestedWhereInput = {
  Company?: InputMaybe<CompanyUpdateManyWithNestedWhereInput>;
};

export type RoleParentUpdateOneInlineInput = {
  /** Connect existing RoleParent document */
  connect?: InputMaybe<RoleParentWhereUniqueInput>;
  /** Create and connect one RoleParent document */
  create?: InputMaybe<RoleParentCreateInput>;
  /** Delete currently connected RoleParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected RoleParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single RoleParent document */
  update?: InputMaybe<RoleParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single RoleParent document */
  upsert?: InputMaybe<RoleParentUpsertWithNestedWhereUniqueInput>;
};

export type RoleParentUpdateWithNestedWhereUniqueInput = {
  Company?: InputMaybe<CompanyUpdateWithNestedWhereUniqueInput>;
};

export type RoleParentUpsertWithNestedWhereUniqueInput = {
  Company?: InputMaybe<CompanyUpsertWithNestedWhereUniqueInput>;
};

export type RoleParentWhereInput = {
  Company?: InputMaybe<CompanyWhereInput>;
};

export type RoleParentWhereUniqueInput = {
  Company?: InputMaybe<CompanyWhereUniqueInput>;
};

export type RoleUpdateInput = {
  timeFrame?: InputMaybe<DateRangeUpdateOneInlineInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RoleUpdateManyInlineInput = {
  /** Create and connect multiple Role component instances */
  create?: InputMaybe<Array<RoleCreateWithPositionInput>>;
  /** Delete multiple Role documents */
  delete?: InputMaybe<Array<RoleWhereUniqueInput>>;
  /** Update multiple Role component instances */
  update?: InputMaybe<Array<RoleUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Role component instances */
  upsert?: InputMaybe<Array<RoleUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type RoleUpdateManyInput = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RoleUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: RoleUpdateManyInput;
  /** Document search */
  where: RoleWhereInput;
};

export type RoleUpdateOneInlineInput = {
  /** Create and connect one Role document */
  create?: InputMaybe<RoleCreateInput>;
  /** Delete currently connected Role document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Role document */
  update?: InputMaybe<RoleUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Role document */
  upsert?: InputMaybe<RoleUpsertWithNestedWhereUniqueInput>;
};

export type RoleUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<RoleUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: RoleWhereUniqueInput;
};

export type RoleUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: RoleUpdateInput;
  /** Unique document search */
  where: RoleWhereUniqueInput;
};

export type RoleUpsertInput = {
  /** Create document if it didn't exist */
  create: RoleCreateInput;
  /** Update document if it exists */
  update: RoleUpdateInput;
};

export type RoleUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<RoleUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: RoleWhereUniqueInput;
};

export type RoleUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: RoleUpsertInput;
  /** Unique document search */
  where: RoleWhereUniqueInput;
};

/** Identifies documents */
export type RoleWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RoleWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RoleWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RoleWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  timeFrame?: InputMaybe<DateRangeWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References Role record uniquely */
export type RoleWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** SEO data for a particular page. */
export type Seo = Entity & {
  __typename?: 'SEO';
  /** The description to use for SEO. */
  description: Scalars['String']['output'];
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Keywords to use for SEO. */
  keywords: Array<SeoKeyword>;
  /** The image/thumbnail to use as the Open Graph image. */
  ogImage: Asset;
  /** System stage field */
  stage: Stage;
  /** The title to use for SEO. */
  title: Scalars['String']['output'];
};


/** SEO data for a particular page. */
export type SeoKeywordsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<SeoKeywordOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SeoKeywordWhereInput>;
};


/** SEO data for a particular page. */
export type SeoOgImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type SeoConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: SeoWhereUniqueInput;
};

/** A connection to a list of items. */
export type SeoConnection = {
  __typename?: 'SEOConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SeoEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SeoCreateInput = {
  description: Scalars['String']['input'];
  keywords?: InputMaybe<SeoKeywordCreateManyInlineInput>;
  ogImage: AssetCreateOneInlineInput;
  title: Scalars['String']['input'];
};

export type SeoCreateManyInlineInput = {
  /** Create and connect multiple existing SEO documents */
  create?: InputMaybe<Array<SeoCreateInput>>;
};

export type SeoCreateOneInlineInput = {
  /** Create and connect one SEO document */
  create?: InputMaybe<SeoCreateInput>;
};

export type SeoCreateWithPositionInput = {
  /** Document to create */
  data: SeoCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type SeoEdge = {
  __typename?: 'SEOEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Seo;
};

/** A single keyword to use for SEO. */
export type SeoKeyword = Entity & {
  __typename?: 'SEOKeyword';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System stage field */
  stage: Stage;
  /** Enter the keyword here. */
  value: Scalars['String']['output'];
};

export type SeoKeywordConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: SeoKeywordWhereUniqueInput;
};

/** A connection to a list of items. */
export type SeoKeywordConnection = {
  __typename?: 'SEOKeywordConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SeoKeywordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SeoKeywordCreateInput = {
  value: Scalars['String']['input'];
};

export type SeoKeywordCreateManyInlineInput = {
  /** Create and connect multiple existing SEOKeyword documents */
  create?: InputMaybe<Array<SeoKeywordCreateInput>>;
};

export type SeoKeywordCreateOneInlineInput = {
  /** Create and connect one SEOKeyword document */
  create?: InputMaybe<SeoKeywordCreateInput>;
};

export type SeoKeywordCreateWithPositionInput = {
  /** Document to create */
  data: SeoKeywordCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type SeoKeywordEdge = {
  __typename?: 'SEOKeywordEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: SeoKeyword;
};

/** Identifies documents */
export type SeoKeywordManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SeoKeywordWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SeoKeywordWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SeoKeywordWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  value_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  value_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  value_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  value_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  value_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  value_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  value_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  value_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum SeoKeywordOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export type SeoKeywordParent = Seo;

export type SeoKeywordParentConnectInput = {
  SEO?: InputMaybe<SeoConnectInput>;
};

export type SeoKeywordParentCreateInput = {
  SEO?: InputMaybe<SeoCreateInput>;
};

export type SeoKeywordParentCreateManyInlineInput = {
  /** Create and connect multiple existing SEOKeywordParent documents */
  create?: InputMaybe<Array<SeoKeywordParentCreateInput>>;
};

export type SeoKeywordParentCreateOneInlineInput = {
  /** Create and connect one SEOKeywordParent document */
  create?: InputMaybe<SeoKeywordParentCreateInput>;
};

export type SeoKeywordParentCreateWithPositionInput = {
  SEO?: InputMaybe<SeoCreateWithPositionInput>;
};

export type SeoKeywordParentUpdateInput = {
  SEO?: InputMaybe<SeoUpdateInput>;
};

export type SeoKeywordParentUpdateManyInlineInput = {
  /** Create and connect multiple SEOKeywordParent component instances */
  create?: InputMaybe<Array<SeoKeywordParentCreateWithPositionInput>>;
  /** Delete multiple SEOKeywordParent documents */
  delete?: InputMaybe<Array<SeoKeywordParentWhereUniqueInput>>;
  /** Update multiple SEOKeywordParent component instances */
  update?: InputMaybe<Array<SeoKeywordParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple SEOKeywordParent component instances */
  upsert?: InputMaybe<Array<SeoKeywordParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type SeoKeywordParentUpdateManyWithNestedWhereInput = {
  SEO?: InputMaybe<SeoUpdateManyWithNestedWhereInput>;
};

export type SeoKeywordParentUpdateOneInlineInput = {
  /** Create and connect one SEOKeywordParent document */
  create?: InputMaybe<SeoKeywordParentCreateInput>;
  /** Delete currently connected SEOKeywordParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single SEOKeywordParent document */
  update?: InputMaybe<SeoKeywordParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SEOKeywordParent document */
  upsert?: InputMaybe<SeoKeywordParentUpsertWithNestedWhereUniqueInput>;
};

export type SeoKeywordParentUpdateWithNestedWhereUniqueAndPositionInput = {
  SEO?: InputMaybe<SeoUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type SeoKeywordParentUpdateWithNestedWhereUniqueInput = {
  SEO?: InputMaybe<SeoUpdateWithNestedWhereUniqueInput>;
};

export type SeoKeywordParentUpsertWithNestedWhereUniqueAndPositionInput = {
  SEO?: InputMaybe<SeoUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type SeoKeywordParentUpsertWithNestedWhereUniqueInput = {
  SEO?: InputMaybe<SeoUpsertWithNestedWhereUniqueInput>;
};

export type SeoKeywordParentWhereInput = {
  SEO?: InputMaybe<SeoWhereInput>;
};

export type SeoKeywordParentWhereUniqueInput = {
  SEO?: InputMaybe<SeoWhereUniqueInput>;
};

export type SeoKeywordUpdateInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SeoKeywordUpdateManyInlineInput = {
  /** Create and connect multiple SEOKeyword component instances */
  create?: InputMaybe<Array<SeoKeywordCreateWithPositionInput>>;
  /** Delete multiple SEOKeyword documents */
  delete?: InputMaybe<Array<SeoKeywordWhereUniqueInput>>;
  /** Update multiple SEOKeyword component instances */
  update?: InputMaybe<Array<SeoKeywordUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple SEOKeyword component instances */
  upsert?: InputMaybe<Array<SeoKeywordUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type SeoKeywordUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type SeoKeywordUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SeoKeywordUpdateManyInput;
  /** Document search */
  where: SeoKeywordWhereInput;
};

export type SeoKeywordUpdateOneInlineInput = {
  /** Create and connect one SEOKeyword document */
  create?: InputMaybe<SeoKeywordCreateInput>;
  /** Delete currently connected SEOKeyword document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single SEOKeyword document */
  update?: InputMaybe<SeoKeywordUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SEOKeyword document */
  upsert?: InputMaybe<SeoKeywordUpsertWithNestedWhereUniqueInput>;
};

export type SeoKeywordUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<SeoKeywordUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: SeoKeywordWhereUniqueInput;
};

export type SeoKeywordUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SeoKeywordUpdateInput;
  /** Unique document search */
  where: SeoKeywordWhereUniqueInput;
};

export type SeoKeywordUpsertInput = {
  /** Create document if it didn't exist */
  create: SeoKeywordCreateInput;
  /** Update document if it exists */
  update: SeoKeywordUpdateInput;
};

export type SeoKeywordUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<SeoKeywordUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: SeoKeywordWhereUniqueInput;
};

export type SeoKeywordUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SeoKeywordUpsertInput;
  /** Unique document search */
  where: SeoKeywordWhereUniqueInput;
};

/** Identifies documents */
export type SeoKeywordWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SeoKeywordWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SeoKeywordWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SeoKeywordWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  value_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  value_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  value_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  value_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  value_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  value_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  value_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  value_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References SEOKeyword record uniquely */
export type SeoKeywordWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Identifies documents */
export type SeoManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SeoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SeoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SeoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  keywords_every?: InputMaybe<SeoKeywordWhereInput>;
  keywords_none?: InputMaybe<SeoKeywordWhereInput>;
  keywords_some?: InputMaybe<SeoKeywordWhereInput>;
  ogImage?: InputMaybe<AssetWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum SeoOrderByInput {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type SeoParent = GeneralPage;

export type SeoParentConnectInput = {
  GeneralPage?: InputMaybe<GeneralPageConnectInput>;
};

export type SeoParentCreateInput = {
  GeneralPage?: InputMaybe<GeneralPageCreateInput>;
};

export type SeoParentCreateManyInlineInput = {
  /** Connect multiple existing SEOParent documents */
  connect?: InputMaybe<Array<SeoParentWhereUniqueInput>>;
  /** Create and connect multiple existing SEOParent documents */
  create?: InputMaybe<Array<SeoParentCreateInput>>;
};

export type SeoParentCreateOneInlineInput = {
  /** Connect one existing SEOParent document */
  connect?: InputMaybe<SeoParentWhereUniqueInput>;
  /** Create and connect one SEOParent document */
  create?: InputMaybe<SeoParentCreateInput>;
};

export type SeoParentUpdateInput = {
  GeneralPage?: InputMaybe<GeneralPageUpdateInput>;
};

export type SeoParentUpdateManyInlineInput = {
  /** Connect multiple existing SEOParent documents */
  connect?: InputMaybe<Array<SeoParentConnectInput>>;
  /** Create and connect multiple SEOParent documents */
  create?: InputMaybe<Array<SeoParentCreateInput>>;
  /** Delete multiple SEOParent documents */
  delete?: InputMaybe<Array<SeoParentWhereUniqueInput>>;
  /** Disconnect multiple SEOParent documents */
  disconnect?: InputMaybe<Array<SeoParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing SEOParent documents */
  set?: InputMaybe<Array<SeoParentWhereUniqueInput>>;
  /** Update multiple SEOParent documents */
  update?: InputMaybe<Array<SeoParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple SEOParent documents */
  upsert?: InputMaybe<Array<SeoParentUpsertWithNestedWhereUniqueInput>>;
};

export type SeoParentUpdateManyWithNestedWhereInput = {
  GeneralPage?: InputMaybe<GeneralPageUpdateManyWithNestedWhereInput>;
};

export type SeoParentUpdateOneInlineInput = {
  /** Connect existing SEOParent document */
  connect?: InputMaybe<SeoParentWhereUniqueInput>;
  /** Create and connect one SEOParent document */
  create?: InputMaybe<SeoParentCreateInput>;
  /** Delete currently connected SEOParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected SEOParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single SEOParent document */
  update?: InputMaybe<SeoParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SEOParent document */
  upsert?: InputMaybe<SeoParentUpsertWithNestedWhereUniqueInput>;
};

export type SeoParentUpdateWithNestedWhereUniqueInput = {
  GeneralPage?: InputMaybe<GeneralPageUpdateWithNestedWhereUniqueInput>;
};

export type SeoParentUpsertWithNestedWhereUniqueInput = {
  GeneralPage?: InputMaybe<GeneralPageUpsertWithNestedWhereUniqueInput>;
};

export type SeoParentWhereInput = {
  GeneralPage?: InputMaybe<GeneralPageWhereInput>;
};

export type SeoParentWhereUniqueInput = {
  GeneralPage?: InputMaybe<GeneralPageWhereUniqueInput>;
};

export type SeoUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<SeoKeywordUpdateManyInlineInput>;
  ogImage?: InputMaybe<AssetUpdateOneInlineInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type SeoUpdateManyInlineInput = {
  /** Create and connect multiple SEO component instances */
  create?: InputMaybe<Array<SeoCreateWithPositionInput>>;
  /** Delete multiple SEO documents */
  delete?: InputMaybe<Array<SeoWhereUniqueInput>>;
  /** Update multiple SEO component instances */
  update?: InputMaybe<Array<SeoUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple SEO component instances */
  upsert?: InputMaybe<Array<SeoUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type SeoUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type SeoUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SeoUpdateManyInput;
  /** Document search */
  where: SeoWhereInput;
};

export type SeoUpdateOneInlineInput = {
  /** Create and connect one SEO document */
  create?: InputMaybe<SeoCreateInput>;
  /** Delete currently connected SEO document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single SEO document */
  update?: InputMaybe<SeoUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SEO document */
  upsert?: InputMaybe<SeoUpsertWithNestedWhereUniqueInput>;
};

export type SeoUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<SeoUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: SeoWhereUniqueInput;
};

export type SeoUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SeoUpdateInput;
  /** Unique document search */
  where: SeoWhereUniqueInput;
};

export type SeoUpsertInput = {
  /** Create document if it didn't exist */
  create: SeoCreateInput;
  /** Update document if it exists */
  update: SeoUpdateInput;
};

export type SeoUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<SeoUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: SeoWhereUniqueInput;
};

export type SeoUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SeoUpsertInput;
  /** Unique document search */
  where: SeoWhereUniqueInput;
};

/** Identifies documents */
export type SeoWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SeoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SeoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SeoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  keywords_every?: InputMaybe<SeoKeywordWhereInput>;
  keywords_none?: InputMaybe<SeoKeywordWhereInput>;
  keywords_some?: InputMaybe<SeoKeywordWhereInput>;
  ogImage?: InputMaybe<AssetWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References SEO record uniquely */
export type SeoWhereUniqueInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Scheduled Operation system model */
export type ScheduledOperation = Entity & Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json']['output'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Company | Course | EducationalInstitution | GeneralPage | Project | Qualification | Resume | Technology;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Entity & Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean']['output'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean']['output'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

/** A software development technology (e.g. language, framework, etc.) used in a project. */
export type Technology = Entity & Node & {
  __typename?: 'Technology';
  /** Categories that the technology belongs to. */
  categories: Array<TechnologyCategory>;
  /** A set of colors reflecting the branding of the technology. */
  colors: ColorSet;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Technology>;
  /** List of Technology versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The primary logo and icon for the technology. */
  logo?: Maybe<LogoSet>;
  /** The name of the technology. */
  name: Scalars['String']['output'];
  /** Projects that have used or are currently using this technology. */
  projects: Array<Project>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  url: Scalars['String']['output'];
};


/** A software development technology (e.g. language, framework, etc.) used in a project. */
export type TechnologyColorsArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** A software development technology (e.g. language, framework, etc.) used in a project. */
export type TechnologyCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** A software development technology (e.g. language, framework, etc.) used in a project. */
export type TechnologyDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** A software development technology (e.g. language, framework, etc.) used in a project. */
export type TechnologyHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** A software development technology (e.g. language, framework, etc.) used in a project. */
export type TechnologyLogoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** A software development technology (e.g. language, framework, etc.) used in a project. */
export type TechnologyProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectWhereInput>;
};


/** A software development technology (e.g. language, framework, etc.) used in a project. */
export type TechnologyPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** A software development technology (e.g. language, framework, etc.) used in a project. */
export type TechnologyScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** A software development technology (e.g. language, framework, etc.) used in a project. */
export type TechnologyUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

/** A category that a software technology belongs to. */
export enum TechnologyCategory {
  Accessibility = 'accessibility',
  Ai = 'ai',
  Analytics = 'analytics',
  Animation = 'animation',
  Auth = 'auth',
  BackEnd = 'back_end',
  BuildPipeline = 'build_pipeline',
  Cms = 'cms',
  Database = 'database',
  Design = 'design',
  Documentation = 'documentation',
  Ecommerce = 'ecommerce',
  Electronics = 'electronics',
  Email = 'email',
  Engagement = 'engagement',
  ErrorReporting = 'error_reporting',
  ExternalApi = 'external_api',
  Forms = 'forms',
  Framework = 'framework',
  FrontEnd = 'front_end',
  Hardware = 'hardware',
  Infrastructure = 'infrastructure',
  InternalTooling = 'internal_tooling',
  Language = 'language',
  Library = 'library',
  Linux = 'linux',
  Marketing = 'marketing',
  Networking = 'networking',
  OperatingSystem = 'operating_system',
  Orm = 'orm',
  ProjectManagement = 'project_management',
  RuntimeEnvironment = 'runtime_environment',
  SchemaValidation = 'schema_validation',
  Security = 'security',
  StateManagement = 'state_management',
  Storage = 'storage',
  UserInterface = 'user_interface'
}

export type TechnologyConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TechnologyWhereUniqueInput;
};

/** A connection to a list of items. */
export type TechnologyConnection = {
  __typename?: 'TechnologyConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TechnologyEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TechnologyCreateInput = {
  categories?: InputMaybe<Array<TechnologyCategory>>;
  clvygjac60rbe072q5mio2z23?: InputMaybe<ResumeCreateManyInlineInput>;
  colors: ColorSetCreateOneInlineInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  logo?: InputMaybe<LogoSetCreateOneInlineInput>;
  name: Scalars['String']['input'];
  projects?: InputMaybe<ProjectCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  url: Scalars['String']['input'];
};

export type TechnologyCreateManyInlineInput = {
  /** Connect multiple existing Technology documents */
  connect?: InputMaybe<Array<TechnologyWhereUniqueInput>>;
  /** Create and connect multiple existing Technology documents */
  create?: InputMaybe<Array<TechnologyCreateInput>>;
};

export type TechnologyCreateOneInlineInput = {
  /** Connect one existing Technology document */
  connect?: InputMaybe<TechnologyWhereUniqueInput>;
  /** Create and connect one Technology document */
  create?: InputMaybe<TechnologyCreateInput>;
};

/** An edge in a connection. */
export type TechnologyEdge = {
  __typename?: 'TechnologyEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Technology;
};

/** Identifies documents */
export type TechnologyManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TechnologyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TechnologyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TechnologyWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  categories?: InputMaybe<Array<TechnologyCategory>>;
  /** Matches if the field array contains *all* items provided to the filter */
  categories_contains_all?: InputMaybe<Array<TechnologyCategory>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  categories_contains_none?: InputMaybe<Array<TechnologyCategory>>;
  /** Matches if the field array contains at least one item provided to the filter */
  categories_contains_some?: InputMaybe<Array<TechnologyCategory>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  categories_not?: InputMaybe<Array<TechnologyCategory>>;
  colors?: InputMaybe<ColorSetWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<TechnologyWhereStageInput>;
  documentInStages_none?: InputMaybe<TechnologyWhereStageInput>;
  documentInStages_some?: InputMaybe<TechnologyWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  logo?: InputMaybe<LogoSetWhereInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  projects_every?: InputMaybe<ProjectWhereInput>;
  projects_none?: InputMaybe<ProjectWhereInput>;
  projects_some?: InputMaybe<ProjectWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum TechnologyOrderByInput {
  CategoriesAsc = 'categories_ASC',
  CategoriesDesc = 'categories_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type TechnologyUpdateInput = {
  categories?: InputMaybe<Array<TechnologyCategory>>;
  clvygjac60rbe072q5mio2z23?: InputMaybe<ResumeUpdateManyInlineInput>;
  colors?: InputMaybe<ColorSetUpdateOneInlineInput>;
  logo?: InputMaybe<LogoSetUpdateOneInlineInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  projects?: InputMaybe<ProjectUpdateManyInlineInput>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type TechnologyUpdateManyInlineInput = {
  /** Connect multiple existing Technology documents */
  connect?: InputMaybe<Array<TechnologyConnectInput>>;
  /** Create and connect multiple Technology documents */
  create?: InputMaybe<Array<TechnologyCreateInput>>;
  /** Delete multiple Technology documents */
  delete?: InputMaybe<Array<TechnologyWhereUniqueInput>>;
  /** Disconnect multiple Technology documents */
  disconnect?: InputMaybe<Array<TechnologyWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Technology documents */
  set?: InputMaybe<Array<TechnologyWhereUniqueInput>>;
  /** Update multiple Technology documents */
  update?: InputMaybe<Array<TechnologyUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Technology documents */
  upsert?: InputMaybe<Array<TechnologyUpsertWithNestedWhereUniqueInput>>;
};

export type TechnologyUpdateManyInput = {
  categories?: InputMaybe<Array<TechnologyCategory>>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type TechnologyUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TechnologyUpdateManyInput;
  /** Document search */
  where: TechnologyWhereInput;
};

export type TechnologyUpdateOneInlineInput = {
  /** Connect existing Technology document */
  connect?: InputMaybe<TechnologyWhereUniqueInput>;
  /** Create and connect one Technology document */
  create?: InputMaybe<TechnologyCreateInput>;
  /** Delete currently connected Technology document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Technology document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Technology document */
  update?: InputMaybe<TechnologyUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Technology document */
  upsert?: InputMaybe<TechnologyUpsertWithNestedWhereUniqueInput>;
};

export type TechnologyUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TechnologyUpdateInput;
  /** Unique document search */
  where: TechnologyWhereUniqueInput;
};

export type TechnologyUpsertInput = {
  /** Create document if it didn't exist */
  create: TechnologyCreateInput;
  /** Update document if it exists */
  update: TechnologyUpdateInput;
};

export type TechnologyUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TechnologyUpsertInput;
  /** Unique document search */
  where: TechnologyWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type TechnologyWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type TechnologyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TechnologyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TechnologyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TechnologyWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  categories?: InputMaybe<Array<TechnologyCategory>>;
  /** Matches if the field array contains *all* items provided to the filter */
  categories_contains_all?: InputMaybe<Array<TechnologyCategory>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  categories_contains_none?: InputMaybe<Array<TechnologyCategory>>;
  /** Matches if the field array contains at least one item provided to the filter */
  categories_contains_some?: InputMaybe<Array<TechnologyCategory>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  categories_not?: InputMaybe<Array<TechnologyCategory>>;
  colors?: InputMaybe<ColorSetWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<TechnologyWhereStageInput>;
  documentInStages_none?: InputMaybe<TechnologyWhereStageInput>;
  documentInStages_some?: InputMaybe<TechnologyWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  logo?: InputMaybe<LogoSetWhereInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  projects_every?: InputMaybe<ProjectWhereInput>;
  projects_none?: InputMaybe<ProjectWhereInput>;
  projects_some?: InputMaybe<ProjectWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type TechnologyWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TechnologyWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TechnologyWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TechnologyWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<TechnologyWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Technology record uniquely */
export type TechnologyWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Entity & Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean']['output'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String']['output'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  AppToken = 'APP_TOKEN',
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID']['input'];
  revision: Scalars['Int']['input'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type UpdateTechnologyMutationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: TechnologyUpdateInput;
}>;


export type UpdateTechnologyMutationMutation = { __typename?: 'Mutation', updateTechnology?: { __typename?: 'Technology', id: string } | null };

export type BeliefDataFragment = { __typename?: 'Belief', id: string, title: string, description: string } & { ' $fragmentName'?: 'BeliefDataFragment' };

export type BeliefsSectionDataFragment = { __typename?: 'BeliefsSection', id: string, beliefs: Array<(
    { __typename?: 'Belief' }
    & { ' $fragmentRefs'?: { 'BeliefDataFragment': BeliefDataFragment } }
  )> } & { ' $fragmentName'?: 'BeliefsSectionDataFragment' };

export type LocationDataFragment = { __typename?: 'LocationItem', id: string, city: string, country: string, coordinates: { __typename?: 'Location', latitude: number, longitude: number } } & { ' $fragmentName'?: 'LocationDataFragment' };

export type PersonalOverviewSectionDataFragment = { __typename?: 'PersonalOverviewSection', id: string, name: string, pronouns: string, profilePhoto: { __typename?: 'Asset', id: string, url: string }, description: { __typename?: 'RichText', markdown: string }, location: (
    { __typename?: 'LocationItem' }
    & { ' $fragmentRefs'?: { 'LocationDataFragment': LocationDataFragment } }
  ) } & { ' $fragmentName'?: 'PersonalOverviewSectionDataFragment' };

export type CardListSectionCompanyItemDataFragment = { __typename?: 'Company', id: string, slug?: string | null, name: string, logo?: { __typename?: 'LogoSet', primary?: { __typename?: 'Asset', id: string, url: string } | null } | null, colors?: { __typename?: 'ColorSet', primary: { __typename?: 'Color', hex: any }, text: { __typename?: 'Color', hex: any }, background: { __typename?: 'Color', hex: any } } | null, timeFrame: { __typename?: 'DateRange', startDate: any, endDate?: any | null } } & { ' $fragmentName'?: 'CardListSectionCompanyItemDataFragment' };

export type CardListSectionEducationalInstitutionItemDataFragment = { __typename?: 'EducationalInstitution', id: string, slug?: string | null, name: string, logo?: { __typename?: 'LogoSet', primary?: { __typename?: 'Asset', id: string, url: string } | null } | null, colors?: { __typename?: 'ColorSet', primary: { __typename?: 'Color', hex: any }, text: { __typename?: 'Color', hex: any }, background: { __typename?: 'Color', hex: any } } | null, timeFrame: { __typename?: 'DateRange', startDate: any, endDate?: any | null } } & { ' $fragmentName'?: 'CardListSectionEducationalInstitutionItemDataFragment' };

export type CardListSectionProjectItemDataFragment = { __typename?: 'Project', id: string, slug?: string | null, name: string, personalProject?: boolean | null, logo?: { __typename?: 'LogoSet', primary?: { __typename?: 'Asset', id: string, url: string } | null } | null, colors?: { __typename?: 'ColorSet', primary: { __typename?: 'Color', hex: any }, text: { __typename?: 'Color', hex: any }, background: { __typename?: 'Color', hex: any } } | null, timeFrame: { __typename?: 'DateRange', startDate: any, endDate?: any | null }, company?: { __typename?: 'Company', id: string } | null, courses: Array<{ __typename?: 'Course', id: string }> } & { ' $fragmentName'?: 'CardListSectionProjectItemDataFragment' };

export type CardListSectionDataFragment = { __typename?: 'CardListSection', id: string, items: Array<(
    { __typename?: 'Company' }
    & { ' $fragmentRefs'?: { 'CardListSectionCompanyItemDataFragment': CardListSectionCompanyItemDataFragment } }
  ) | (
    { __typename?: 'EducationalInstitution' }
    & { ' $fragmentRefs'?: { 'CardListSectionEducationalInstitutionItemDataFragment': CardListSectionEducationalInstitutionItemDataFragment } }
  ) | (
    { __typename?: 'Project' }
    & { ' $fragmentRefs'?: { 'CardListSectionProjectItemDataFragment': CardListSectionProjectItemDataFragment } }
  )> } & { ' $fragmentName'?: 'CardListSectionDataFragment' };

export type ContactFormSectionDataFragment = { __typename?: 'ContactFormSection', id: string } & { ' $fragmentName'?: 'ContactFormSectionDataFragment' };

export type GeneralPageDataFragment = { __typename?: 'GeneralPage', heading: string, subHeading: string, sections: Array<(
    { __typename?: 'BeliefsSection' }
    & { ' $fragmentRefs'?: { 'BeliefsSectionDataFragment': BeliefsSectionDataFragment } }
  ) | (
    { __typename?: 'CardListSection' }
    & { ' $fragmentRefs'?: { 'CardListSectionDataFragment': CardListSectionDataFragment } }
  ) | (
    { __typename?: 'ContactFormSection' }
    & { ' $fragmentRefs'?: { 'ContactFormSectionDataFragment': ContactFormSectionDataFragment } }
  ) | (
    { __typename?: 'PersonalOverviewSection' }
    & { ' $fragmentRefs'?: { 'PersonalOverviewSectionDataFragment': PersonalOverviewSectionDataFragment } }
  )> } & { ' $fragmentName'?: 'GeneralPageDataFragment' };

export type GeneralPageQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GeneralPageQuery = { __typename?: 'Query', generalPage?: (
    { __typename?: 'GeneralPage' }
    & { ' $fragmentRefs'?: { 'GeneralPageDataFragment': GeneralPageDataFragment } }
  ) | null };

export type AllProjectSummariesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProjectSummariesQueryQuery = { __typename?: 'Query', projects: Array<(
    { __typename?: 'Project' }
    & { ' $fragmentRefs'?: { 'ProjectSummaryFieldsFragment': ProjectSummaryFieldsFragment } }
  )> };

export type ProjectSummaryFieldsFragment = { __typename?: 'Project', id: string, slug?: string | null, name: string, logo?: { __typename?: 'LogoSet', primary?: { __typename?: 'Asset', url: string } | null } | null } & { ' $fragmentName'?: 'ProjectSummaryFieldsFragment' };

export type ProjectQueryQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type ProjectQueryQuery = { __typename?: 'Query', project?: (
    { __typename?: 'Project' }
    & { ' $fragmentRefs'?: { 'AllProjectFieldsFragment': AllProjectFieldsFragment } }
  ) | null };

export type AllProjectFieldsFragment = { __typename?: 'Project', id: string, name: string } & { ' $fragmentName'?: 'AllProjectFieldsFragment' };

export type ResumeTechnologyDataFragment = { __typename?: 'Technology', id: string, name: string, url: string } & { ' $fragmentName'?: 'ResumeTechnologyDataFragment' };

export type ResumeCompanyDataFragment = { __typename?: 'Company', id: string, slug?: string | null, name: string, timeFrame: { __typename?: 'DateRange', startDate: any, endDate?: any | null } } & { ' $fragmentName'?: 'ResumeCompanyDataFragment' };

export type ResumeProjectDataFragment = { __typename?: 'Project', id: string, slug?: string | null, name: string, timeFrame: { __typename?: 'DateRange', startDate: any, endDate?: any | null } } & { ' $fragmentName'?: 'ResumeProjectDataFragment' };

export type ResumeDataFragment = { __typename?: 'Resume', technologies: Array<(
    { __typename?: 'Technology' }
    & { ' $fragmentRefs'?: { 'ResumeTechnologyDataFragment': ResumeTechnologyDataFragment } }
  )>, companies: Array<(
    { __typename?: 'Company' }
    & { ' $fragmentRefs'?: { 'ResumeCompanyDataFragment': ResumeCompanyDataFragment } }
  )>, projects: Array<(
    { __typename?: 'Project' }
    & { ' $fragmentRefs'?: { 'ResumeProjectDataFragment': ResumeProjectDataFragment } }
  )> } & { ' $fragmentName'?: 'ResumeDataFragment' };

export type ResumeQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ResumeQuery = { __typename?: 'Query', resume?: (
    { __typename?: 'Resume' }
    & { ' $fragmentRefs'?: { 'ResumeDataFragment': ResumeDataFragment } }
  ) | null };

export type TechnologiesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type TechnologiesQueryQuery = { __typename?: 'Query', technologies: Array<(
    { __typename?: 'Technology' }
    & { ' $fragmentRefs'?: { 'AllTechnologyFieldsFragment': AllTechnologyFieldsFragment } }
  )> };

export type AllTechnologyFieldsFragment = { __typename?: 'Technology', id: string, name: string, url: string, categories: Array<TechnologyCategory>, logo?: { __typename?: 'LogoSet', id: string } | null, colors: { __typename?: 'ColorSet', primary: { __typename?: 'Color', hex: any }, text: { __typename?: 'Color', hex: any }, background: { __typename?: 'Color', hex: any } }, projects: Array<{ __typename?: 'Project', id: string }> } & { ' $fragmentName'?: 'AllTechnologyFieldsFragment' };

export const BeliefDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BeliefData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Belief"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]} as unknown as DocumentNode<BeliefDataFragment, unknown>;
export const BeliefsSectionDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BeliefsSectionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BeliefsSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"beliefs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BeliefData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BeliefData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Belief"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]} as unknown as DocumentNode<BeliefsSectionDataFragment, unknown>;
export const LocationDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocationData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LocationItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"coordinates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}}]}}]} as unknown as DocumentNode<LocationDataFragment, unknown>;
export const PersonalOverviewSectionDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersonalOverviewSectionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PersonalOverviewSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"profilePhoto"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transformation"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"resize"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"512"}},{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"512"}}]}}]}}]}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pronouns"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markdown"}}]}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LocationData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocationData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LocationItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"coordinates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}}]}}]} as unknown as DocumentNode<PersonalOverviewSectionDataFragment, unknown>;
export const CardListSectionCompanyItemDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardListSectionCompanyItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transformation"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"resize"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"512"}},{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"512"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}]}}]}}]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"colors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}},{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}},{"kind":"Field","name":{"kind":"Name","value":"background"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"timeFrame"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}}]}}]} as unknown as DocumentNode<CardListSectionCompanyItemDataFragment, unknown>;
export const CardListSectionEducationalInstitutionItemDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardListSectionEducationalInstitutionItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EducationalInstitution"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transformation"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"resize"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"512"}},{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"512"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}]}}]}}]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"colors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}},{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}},{"kind":"Field","name":{"kind":"Name","value":"background"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"timeFrame"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}}]}}]} as unknown as DocumentNode<CardListSectionEducationalInstitutionItemDataFragment, unknown>;
export const CardListSectionProjectItemDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardListSectionProjectItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transformation"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"resize"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"512"}},{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"512"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}]}}]}}]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"colors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}},{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}},{"kind":"Field","name":{"kind":"Name","value":"background"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"timeFrame"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"personalProject"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"courses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CardListSectionProjectItemDataFragment, unknown>;
export const CardListSectionDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardListSectionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardListSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardListSectionCompanyItemData"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EducationalInstitution"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardListSectionEducationalInstitutionItemData"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardListSectionProjectItemData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardListSectionCompanyItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transformation"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"resize"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"512"}},{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"512"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}]}}]}}]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"colors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}},{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}},{"kind":"Field","name":{"kind":"Name","value":"background"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"timeFrame"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardListSectionEducationalInstitutionItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EducationalInstitution"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transformation"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"resize"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"512"}},{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"512"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}]}}]}}]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"colors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}},{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}},{"kind":"Field","name":{"kind":"Name","value":"background"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"timeFrame"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardListSectionProjectItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transformation"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"resize"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"512"}},{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"512"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}]}}]}}]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"colors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}},{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}},{"kind":"Field","name":{"kind":"Name","value":"background"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"timeFrame"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"personalProject"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"courses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CardListSectionDataFragment, unknown>;
export const ContactFormSectionDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContactFormSectionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContactFormSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<ContactFormSectionDataFragment, unknown>;
export const GeneralPageDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GeneralPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GeneralPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"subHeading"}},{"kind":"Field","name":{"kind":"Name","value":"sections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BeliefsSectionData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonalOverviewSectionData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardListSectionData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContactFormSectionData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BeliefData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Belief"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocationData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LocationItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"coordinates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardListSectionCompanyItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transformation"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"resize"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"512"}},{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"512"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}]}}]}}]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"colors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}},{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}},{"kind":"Field","name":{"kind":"Name","value":"background"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"timeFrame"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardListSectionEducationalInstitutionItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EducationalInstitution"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transformation"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"resize"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"512"}},{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"512"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}]}}]}}]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"colors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}},{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}},{"kind":"Field","name":{"kind":"Name","value":"background"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"timeFrame"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardListSectionProjectItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transformation"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"resize"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"512"}},{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"512"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}]}}]}}]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"colors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}},{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}},{"kind":"Field","name":{"kind":"Name","value":"background"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"timeFrame"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"personalProject"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"courses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BeliefsSectionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BeliefsSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"beliefs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BeliefData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersonalOverviewSectionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PersonalOverviewSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"profilePhoto"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transformation"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"resize"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"512"}},{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"512"}}]}}]}}]}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pronouns"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markdown"}}]}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LocationData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardListSectionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardListSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardListSectionCompanyItemData"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EducationalInstitution"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardListSectionEducationalInstitutionItemData"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardListSectionProjectItemData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContactFormSectionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContactFormSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<GeneralPageDataFragment, unknown>;
export const ProjectSummaryFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectSummaryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<ProjectSummaryFieldsFragment, unknown>;
export const AllProjectFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllProjectFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<AllProjectFieldsFragment, unknown>;
export const ResumeTechnologyDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ResumeTechnologyData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Technology"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]} as unknown as DocumentNode<ResumeTechnologyDataFragment, unknown>;
export const ResumeCompanyDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ResumeCompanyData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"timeFrame"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}}]}}]} as unknown as DocumentNode<ResumeCompanyDataFragment, unknown>;
export const ResumeProjectDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ResumeProjectData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"timeFrame"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}}]}}]} as unknown as DocumentNode<ResumeProjectDataFragment, unknown>;
export const ResumeDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ResumeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Resume"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"technologies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ResumeTechnologyData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"companies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ResumeCompanyData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"projects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ResumeProjectData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ResumeTechnologyData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Technology"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ResumeCompanyData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"timeFrame"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ResumeProjectData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"timeFrame"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}}]}}]} as unknown as DocumentNode<ResumeDataFragment, unknown>;
export const AllTechnologyFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllTechnologyFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Technology"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"colors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}},{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}},{"kind":"Field","name":{"kind":"Name","value":"background"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"}},{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AllTechnologyFieldsFragment, unknown>;
export const UpdateTechnologyMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTechnologyMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TechnologyUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTechnology"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateTechnologyMutationMutation, UpdateTechnologyMutationMutationVariables>;
export const GeneralPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GeneralPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generalPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GeneralPageData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BeliefData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Belief"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BeliefsSectionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BeliefsSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"beliefs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BeliefData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocationData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LocationItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"coordinates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersonalOverviewSectionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PersonalOverviewSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"profilePhoto"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transformation"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"resize"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"512"}},{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"512"}}]}}]}}]}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pronouns"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markdown"}}]}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LocationData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardListSectionCompanyItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transformation"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"resize"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"512"}},{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"512"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}]}}]}}]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"colors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}},{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}},{"kind":"Field","name":{"kind":"Name","value":"background"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"timeFrame"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardListSectionEducationalInstitutionItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EducationalInstitution"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transformation"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"resize"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"512"}},{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"512"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}]}}]}}]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"colors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}},{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}},{"kind":"Field","name":{"kind":"Name","value":"background"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"timeFrame"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardListSectionProjectItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transformation"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"resize"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"512"}},{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"512"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}]}}]}}]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"colors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}},{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}},{"kind":"Field","name":{"kind":"Name","value":"background"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"timeFrame"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"personalProject"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"courses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardListSectionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardListSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardListSectionCompanyItemData"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EducationalInstitution"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardListSectionEducationalInstitutionItemData"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardListSectionProjectItemData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContactFormSectionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContactFormSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GeneralPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GeneralPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"subHeading"}},{"kind":"Field","name":{"kind":"Name","value":"sections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BeliefsSectionData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonalOverviewSectionData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardListSectionData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContactFormSectionData"}}]}}]}}]} as unknown as DocumentNode<GeneralPageQuery, GeneralPageQueryVariables>;
export const AllProjectSummariesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllProjectSummariesQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectSummaryFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectSummaryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<AllProjectSummariesQueryQuery, AllProjectSummariesQueryQueryVariables>;
export const ProjectQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProjectQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllProjectFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllProjectFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<ProjectQueryQuery, ProjectQueryQueryVariables>;
export const ResumeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Resume"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resume"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ResumeData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ResumeTechnologyData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Technology"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ResumeCompanyData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"timeFrame"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ResumeProjectData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"timeFrame"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ResumeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Resume"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"technologies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ResumeTechnologyData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"companies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ResumeCompanyData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"projects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ResumeProjectData"}}]}}]}}]} as unknown as DocumentNode<ResumeQuery, ResumeQueryVariables>;
export const TechnologiesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TechnologiesQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"technologies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllTechnologyFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllTechnologyFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Technology"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"colors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}},{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}},{"kind":"Field","name":{"kind":"Name","value":"background"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"}},{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<TechnologiesQueryQuery, TechnologiesQueryQueryVariables>;