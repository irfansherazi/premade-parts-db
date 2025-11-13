
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model SubCategory
 * 
 */
export type SubCategory = $Result.DefaultSelection<Prisma.$SubCategoryPayload>
/**
 * Model Part
 * 
 */
export type Part = $Result.DefaultSelection<Prisma.$PartPayload>
/**
 * Model PartSize
 * 
 */
export type PartSize = $Result.DefaultSelection<Prisma.$PartSizePayload>
/**
 * Model Media
 * 
 */
export type Media = $Result.DefaultSelection<Prisma.$MediaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subCategory`: Exposes CRUD operations for the **SubCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubCategories
    * const subCategories = await prisma.subCategory.findMany()
    * ```
    */
  get subCategory(): Prisma.SubCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.part`: Exposes CRUD operations for the **Part** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parts
    * const parts = await prisma.part.findMany()
    * ```
    */
  get part(): Prisma.PartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.partSize`: Exposes CRUD operations for the **PartSize** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PartSizes
    * const partSizes = await prisma.partSize.findMany()
    * ```
    */
  get partSize(): Prisma.PartSizeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **Media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.MediaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Category: 'Category',
    SubCategory: 'SubCategory',
    Part: 'Part',
    PartSize: 'PartSize',
    Media: 'Media'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "category" | "subCategory" | "part" | "partSize" | "media"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      SubCategory: {
        payload: Prisma.$SubCategoryPayload<ExtArgs>
        fields: Prisma.SubCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          findFirst: {
            args: Prisma.SubCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          findMany: {
            args: Prisma.SubCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>[]
          }
          create: {
            args: Prisma.SubCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          createMany: {
            args: Prisma.SubCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>[]
          }
          delete: {
            args: Prisma.SubCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          update: {
            args: Prisma.SubCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          deleteMany: {
            args: Prisma.SubCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>[]
          }
          upsert: {
            args: Prisma.SubCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          aggregate: {
            args: Prisma.SubCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubCategory>
          }
          groupBy: {
            args: Prisma.SubCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<SubCategoryCountAggregateOutputType> | number
          }
        }
      }
      Part: {
        payload: Prisma.$PartPayload<ExtArgs>
        fields: Prisma.PartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          findFirst: {
            args: Prisma.PartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          findMany: {
            args: Prisma.PartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>[]
          }
          create: {
            args: Prisma.PartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          createMany: {
            args: Prisma.PartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>[]
          }
          delete: {
            args: Prisma.PartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          update: {
            args: Prisma.PartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          deleteMany: {
            args: Prisma.PartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>[]
          }
          upsert: {
            args: Prisma.PartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          aggregate: {
            args: Prisma.PartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePart>
          }
          groupBy: {
            args: Prisma.PartGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartCountArgs<ExtArgs>
            result: $Utils.Optional<PartCountAggregateOutputType> | number
          }
        }
      }
      PartSize: {
        payload: Prisma.$PartSizePayload<ExtArgs>
        fields: Prisma.PartSizeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartSizeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartSizePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartSizeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartSizePayload>
          }
          findFirst: {
            args: Prisma.PartSizeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartSizePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartSizeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartSizePayload>
          }
          findMany: {
            args: Prisma.PartSizeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartSizePayload>[]
          }
          create: {
            args: Prisma.PartSizeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartSizePayload>
          }
          createMany: {
            args: Prisma.PartSizeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartSizeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartSizePayload>[]
          }
          delete: {
            args: Prisma.PartSizeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartSizePayload>
          }
          update: {
            args: Prisma.PartSizeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartSizePayload>
          }
          deleteMany: {
            args: Prisma.PartSizeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartSizeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PartSizeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartSizePayload>[]
          }
          upsert: {
            args: Prisma.PartSizeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartSizePayload>
          }
          aggregate: {
            args: Prisma.PartSizeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartSize>
          }
          groupBy: {
            args: Prisma.PartSizeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartSizeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartSizeCountArgs<ExtArgs>
            result: $Utils.Optional<PartSizeCountAggregateOutputType> | number
          }
        }
      }
      Media: {
        payload: Prisma.$MediaPayload<ExtArgs>
        fields: Prisma.MediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findFirst: {
            args: Prisma.MediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findMany: {
            args: Prisma.MediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          create: {
            args: Prisma.MediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          createMany: {
            args: Prisma.MediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          delete: {
            args: Prisma.MediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          update: {
            args: Prisma.MediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          deleteMany: {
            args: Prisma.MediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          upsert: {
            args: Prisma.MediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          aggregate: {
            args: Prisma.MediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedia>
          }
          groupBy: {
            args: Prisma.MediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaCountArgs<ExtArgs>
            result: $Utils.Optional<MediaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    category?: CategoryOmit
    subCategory?: SubCategoryOmit
    part?: PartOmit
    partSize?: PartSizeOmit
    media?: MediaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    subCategories: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subCategories?: boolean | CategoryCountOutputTypeCountSubCategoriesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountSubCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCategoryWhereInput
  }


  /**
   * Count Type SubCategoryCountOutputType
   */

  export type SubCategoryCountOutputType = {
    parts: number
    children: number
  }

  export type SubCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parts?: boolean | SubCategoryCountOutputTypeCountPartsArgs
    children?: boolean | SubCategoryCountOutputTypeCountChildrenArgs
  }

  // Custom InputTypes
  /**
   * SubCategoryCountOutputType without action
   */
  export type SubCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoryCountOutputType
     */
    select?: SubCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubCategoryCountOutputType without action
   */
  export type SubCategoryCountOutputTypeCountPartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartWhereInput
  }

  /**
   * SubCategoryCountOutputType without action
   */
  export type SubCategoryCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCategoryWhereInput
  }


  /**
   * Count Type PartCountOutputType
   */

  export type PartCountOutputType = {
    partSizes: number
  }

  export type PartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partSizes?: boolean | PartCountOutputTypeCountPartSizesArgs
  }

  // Custom InputTypes
  /**
   * PartCountOutputType without action
   */
  export type PartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartCountOutputType
     */
    select?: PartCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PartCountOutputType without action
   */
  export type PartCountOutputTypeCountPartSizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartSizeWhereInput
  }


  /**
   * Count Type MediaCountOutputType
   */

  export type MediaCountOutputType = {
    Category: number
    SubCategory: number
    Part: number
  }

  export type MediaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category?: boolean | MediaCountOutputTypeCountCategoryArgs
    SubCategory?: boolean | MediaCountOutputTypeCountSubCategoryArgs
    Part?: boolean | MediaCountOutputTypeCountPartArgs
  }

  // Custom InputTypes
  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaCountOutputType
     */
    select?: MediaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeCountCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeCountSubCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCategoryWhereInput
  }

  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeCountPartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    label: string | null
    description: string | null
    media_id: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    label: string | null
    description: string | null
    media_id: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    label: number
    description: number
    media_id: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    label?: true
    description?: true
    media_id?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    label?: true
    description?: true
    media_id?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    label?: true
    description?: true
    media_id?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    label: string
    description: string | null
    media_id: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    description?: boolean
    media_id?: boolean
    media?: boolean | MediaDefaultArgs<ExtArgs>
    subCategories?: boolean | Category$subCategoriesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    description?: boolean
    media_id?: boolean
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    description?: boolean
    media_id?: boolean
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    label?: boolean
    description?: boolean
    media_id?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label" | "description" | "media_id", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | MediaDefaultArgs<ExtArgs>
    subCategories?: boolean | Category$subCategoriesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      media: Prisma.$MediaPayload<ExtArgs>
      subCategories: Prisma.$SubCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      label: string
      description: string | null
      media_id: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    media<T extends MediaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MediaDefaultArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subCategories<T extends Category$subCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Category$subCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly label: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly media_id: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.subCategories
   */
  export type Category$subCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    where?: SubCategoryWhereInput
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    cursor?: SubCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model SubCategory
   */

  export type AggregateSubCategory = {
    _count: SubCategoryCountAggregateOutputType | null
    _avg: SubCategoryAvgAggregateOutputType | null
    _sum: SubCategorySumAggregateOutputType | null
    _min: SubCategoryMinAggregateOutputType | null
    _max: SubCategoryMaxAggregateOutputType | null
  }

  export type SubCategoryAvgAggregateOutputType = {
    id: number | null
    category_id: number | null
    parent_id: number | null
  }

  export type SubCategorySumAggregateOutputType = {
    id: number | null
    category_id: number | null
    parent_id: number | null
  }

  export type SubCategoryMinAggregateOutputType = {
    id: number | null
    label: string | null
    media_id: string | null
    category_id: number | null
    parent_id: number | null
  }

  export type SubCategoryMaxAggregateOutputType = {
    id: number | null
    label: string | null
    media_id: string | null
    category_id: number | null
    parent_id: number | null
  }

  export type SubCategoryCountAggregateOutputType = {
    id: number
    label: number
    media_id: number
    category_id: number
    parent_id: number
    _all: number
  }


  export type SubCategoryAvgAggregateInputType = {
    id?: true
    category_id?: true
    parent_id?: true
  }

  export type SubCategorySumAggregateInputType = {
    id?: true
    category_id?: true
    parent_id?: true
  }

  export type SubCategoryMinAggregateInputType = {
    id?: true
    label?: true
    media_id?: true
    category_id?: true
    parent_id?: true
  }

  export type SubCategoryMaxAggregateInputType = {
    id?: true
    label?: true
    media_id?: true
    category_id?: true
    parent_id?: true
  }

  export type SubCategoryCountAggregateInputType = {
    id?: true
    label?: true
    media_id?: true
    category_id?: true
    parent_id?: true
    _all?: true
  }

  export type SubCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubCategory to aggregate.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubCategories
    **/
    _count?: true | SubCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubCategoryMaxAggregateInputType
  }

  export type GetSubCategoryAggregateType<T extends SubCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSubCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubCategory[P]>
      : GetScalarType<T[P], AggregateSubCategory[P]>
  }




  export type SubCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCategoryWhereInput
    orderBy?: SubCategoryOrderByWithAggregationInput | SubCategoryOrderByWithAggregationInput[]
    by: SubCategoryScalarFieldEnum[] | SubCategoryScalarFieldEnum
    having?: SubCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubCategoryCountAggregateInputType | true
    _avg?: SubCategoryAvgAggregateInputType
    _sum?: SubCategorySumAggregateInputType
    _min?: SubCategoryMinAggregateInputType
    _max?: SubCategoryMaxAggregateInputType
  }

  export type SubCategoryGroupByOutputType = {
    id: number
    label: string
    media_id: string
    category_id: number
    parent_id: number | null
    _count: SubCategoryCountAggregateOutputType | null
    _avg: SubCategoryAvgAggregateOutputType | null
    _sum: SubCategorySumAggregateOutputType | null
    _min: SubCategoryMinAggregateOutputType | null
    _max: SubCategoryMaxAggregateOutputType | null
  }

  type GetSubCategoryGroupByPayload<T extends SubCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], SubCategoryGroupByOutputType[P]>
        }
      >
    >


  export type SubCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    media_id?: boolean
    category_id?: boolean
    parent_id?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
    parts?: boolean | SubCategory$partsArgs<ExtArgs>
    parent?: boolean | SubCategory$parentArgs<ExtArgs>
    children?: boolean | SubCategory$childrenArgs<ExtArgs>
    _count?: boolean | SubCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subCategory"]>

  export type SubCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    media_id?: boolean
    category_id?: boolean
    parent_id?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
    parent?: boolean | SubCategory$parentArgs<ExtArgs>
  }, ExtArgs["result"]["subCategory"]>

  export type SubCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    media_id?: boolean
    category_id?: boolean
    parent_id?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
    parent?: boolean | SubCategory$parentArgs<ExtArgs>
  }, ExtArgs["result"]["subCategory"]>

  export type SubCategorySelectScalar = {
    id?: boolean
    label?: boolean
    media_id?: boolean
    category_id?: boolean
    parent_id?: boolean
  }

  export type SubCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label" | "media_id" | "category_id" | "parent_id", ExtArgs["result"]["subCategory"]>
  export type SubCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
    parts?: boolean | SubCategory$partsArgs<ExtArgs>
    parent?: boolean | SubCategory$parentArgs<ExtArgs>
    children?: boolean | SubCategory$childrenArgs<ExtArgs>
    _count?: boolean | SubCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
    parent?: boolean | SubCategory$parentArgs<ExtArgs>
  }
  export type SubCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
    parent?: boolean | SubCategory$parentArgs<ExtArgs>
  }

  export type $SubCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubCategory"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      media: Prisma.$MediaPayload<ExtArgs>
      parts: Prisma.$PartPayload<ExtArgs>[]
      parent: Prisma.$SubCategoryPayload<ExtArgs> | null
      children: Prisma.$SubCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      label: string
      media_id: string
      category_id: number
      parent_id: number | null
    }, ExtArgs["result"]["subCategory"]>
    composites: {}
  }

  type SubCategoryGetPayload<S extends boolean | null | undefined | SubCategoryDefaultArgs> = $Result.GetResult<Prisma.$SubCategoryPayload, S>

  type SubCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubCategoryCountAggregateInputType | true
    }

  export interface SubCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubCategory'], meta: { name: 'SubCategory' } }
    /**
     * Find zero or one SubCategory that matches the filter.
     * @param {SubCategoryFindUniqueArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubCategoryFindUniqueArgs>(args: SelectSubset<T, SubCategoryFindUniqueArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubCategoryFindUniqueOrThrowArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, SubCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryFindFirstArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubCategoryFindFirstArgs>(args?: SelectSubset<T, SubCategoryFindFirstArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryFindFirstOrThrowArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, SubCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubCategories
     * const subCategories = await prisma.subCategory.findMany()
     * 
     * // Get first 10 SubCategories
     * const subCategories = await prisma.subCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subCategoryWithIdOnly = await prisma.subCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubCategoryFindManyArgs>(args?: SelectSubset<T, SubCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubCategory.
     * @param {SubCategoryCreateArgs} args - Arguments to create a SubCategory.
     * @example
     * // Create one SubCategory
     * const SubCategory = await prisma.subCategory.create({
     *   data: {
     *     // ... data to create a SubCategory
     *   }
     * })
     * 
     */
    create<T extends SubCategoryCreateArgs>(args: SelectSubset<T, SubCategoryCreateArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubCategories.
     * @param {SubCategoryCreateManyArgs} args - Arguments to create many SubCategories.
     * @example
     * // Create many SubCategories
     * const subCategory = await prisma.subCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubCategoryCreateManyArgs>(args?: SelectSubset<T, SubCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubCategories and returns the data saved in the database.
     * @param {SubCategoryCreateManyAndReturnArgs} args - Arguments to create many SubCategories.
     * @example
     * // Create many SubCategories
     * const subCategory = await prisma.subCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubCategories and only return the `id`
     * const subCategoryWithIdOnly = await prisma.subCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, SubCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubCategory.
     * @param {SubCategoryDeleteArgs} args - Arguments to delete one SubCategory.
     * @example
     * // Delete one SubCategory
     * const SubCategory = await prisma.subCategory.delete({
     *   where: {
     *     // ... filter to delete one SubCategory
     *   }
     * })
     * 
     */
    delete<T extends SubCategoryDeleteArgs>(args: SelectSubset<T, SubCategoryDeleteArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubCategory.
     * @param {SubCategoryUpdateArgs} args - Arguments to update one SubCategory.
     * @example
     * // Update one SubCategory
     * const subCategory = await prisma.subCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubCategoryUpdateArgs>(args: SelectSubset<T, SubCategoryUpdateArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubCategories.
     * @param {SubCategoryDeleteManyArgs} args - Arguments to filter SubCategories to delete.
     * @example
     * // Delete a few SubCategories
     * const { count } = await prisma.subCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubCategoryDeleteManyArgs>(args?: SelectSubset<T, SubCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubCategories
     * const subCategory = await prisma.subCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubCategoryUpdateManyArgs>(args: SelectSubset<T, SubCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubCategories and returns the data updated in the database.
     * @param {SubCategoryUpdateManyAndReturnArgs} args - Arguments to update many SubCategories.
     * @example
     * // Update many SubCategories
     * const subCategory = await prisma.subCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubCategories and only return the `id`
     * const subCategoryWithIdOnly = await prisma.subCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, SubCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubCategory.
     * @param {SubCategoryUpsertArgs} args - Arguments to update or create a SubCategory.
     * @example
     * // Update or create a SubCategory
     * const subCategory = await prisma.subCategory.upsert({
     *   create: {
     *     // ... data to create a SubCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubCategory we want to update
     *   }
     * })
     */
    upsert<T extends SubCategoryUpsertArgs>(args: SelectSubset<T, SubCategoryUpsertArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryCountArgs} args - Arguments to filter SubCategories to count.
     * @example
     * // Count the number of SubCategories
     * const count = await prisma.subCategory.count({
     *   where: {
     *     // ... the filter for the SubCategories we want to count
     *   }
     * })
    **/
    count<T extends SubCategoryCountArgs>(
      args?: Subset<T, SubCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubCategoryAggregateArgs>(args: Subset<T, SubCategoryAggregateArgs>): Prisma.PrismaPromise<GetSubCategoryAggregateType<T>>

    /**
     * Group by SubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubCategoryGroupByArgs['orderBy'] }
        : { orderBy?: SubCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubCategory model
   */
  readonly fields: SubCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    media<T extends MediaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MediaDefaultArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parts<T extends SubCategory$partsArgs<ExtArgs> = {}>(args?: Subset<T, SubCategory$partsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parent<T extends SubCategory$parentArgs<ExtArgs> = {}>(args?: Subset<T, SubCategory$parentArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends SubCategory$childrenArgs<ExtArgs> = {}>(args?: Subset<T, SubCategory$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SubCategory model
   */
  interface SubCategoryFieldRefs {
    readonly id: FieldRef<"SubCategory", 'Int'>
    readonly label: FieldRef<"SubCategory", 'String'>
    readonly media_id: FieldRef<"SubCategory", 'String'>
    readonly category_id: FieldRef<"SubCategory", 'Int'>
    readonly parent_id: FieldRef<"SubCategory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SubCategory findUnique
   */
  export type SubCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where: SubCategoryWhereUniqueInput
  }

  /**
   * SubCategory findUniqueOrThrow
   */
  export type SubCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where: SubCategoryWhereUniqueInput
  }

  /**
   * SubCategory findFirst
   */
  export type SubCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubCategories.
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategories.
     */
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }

  /**
   * SubCategory findFirstOrThrow
   */
  export type SubCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubCategories.
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategories.
     */
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }

  /**
   * SubCategory findMany
   */
  export type SubCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategories to fetch.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubCategories.
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }

  /**
   * SubCategory create
   */
  export type SubCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a SubCategory.
     */
    data: XOR<SubCategoryCreateInput, SubCategoryUncheckedCreateInput>
  }

  /**
   * SubCategory createMany
   */
  export type SubCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubCategories.
     */
    data: SubCategoryCreateManyInput | SubCategoryCreateManyInput[]
  }

  /**
   * SubCategory createManyAndReturn
   */
  export type SubCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many SubCategories.
     */
    data: SubCategoryCreateManyInput | SubCategoryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubCategory update
   */
  export type SubCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a SubCategory.
     */
    data: XOR<SubCategoryUpdateInput, SubCategoryUncheckedUpdateInput>
    /**
     * Choose, which SubCategory to update.
     */
    where: SubCategoryWhereUniqueInput
  }

  /**
   * SubCategory updateMany
   */
  export type SubCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubCategories.
     */
    data: XOR<SubCategoryUpdateManyMutationInput, SubCategoryUncheckedUpdateManyInput>
    /**
     * Filter which SubCategories to update
     */
    where?: SubCategoryWhereInput
    /**
     * Limit how many SubCategories to update.
     */
    limit?: number
  }

  /**
   * SubCategory updateManyAndReturn
   */
  export type SubCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * The data used to update SubCategories.
     */
    data: XOR<SubCategoryUpdateManyMutationInput, SubCategoryUncheckedUpdateManyInput>
    /**
     * Filter which SubCategories to update
     */
    where?: SubCategoryWhereInput
    /**
     * Limit how many SubCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubCategory upsert
   */
  export type SubCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the SubCategory to update in case it exists.
     */
    where: SubCategoryWhereUniqueInput
    /**
     * In case the SubCategory found by the `where` argument doesn't exist, create a new SubCategory with this data.
     */
    create: XOR<SubCategoryCreateInput, SubCategoryUncheckedCreateInput>
    /**
     * In case the SubCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubCategoryUpdateInput, SubCategoryUncheckedUpdateInput>
  }

  /**
   * SubCategory delete
   */
  export type SubCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter which SubCategory to delete.
     */
    where: SubCategoryWhereUniqueInput
  }

  /**
   * SubCategory deleteMany
   */
  export type SubCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubCategories to delete
     */
    where?: SubCategoryWhereInput
    /**
     * Limit how many SubCategories to delete.
     */
    limit?: number
  }

  /**
   * SubCategory.parts
   */
  export type SubCategory$partsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    where?: PartWhereInput
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    cursor?: PartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * SubCategory.parent
   */
  export type SubCategory$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    where?: SubCategoryWhereInput
  }

  /**
   * SubCategory.children
   */
  export type SubCategory$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    where?: SubCategoryWhereInput
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    cursor?: SubCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }

  /**
   * SubCategory without action
   */
  export type SubCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Part
   */

  export type AggregatePart = {
    _count: PartCountAggregateOutputType | null
    _avg: PartAvgAggregateOutputType | null
    _sum: PartSumAggregateOutputType | null
    _min: PartMinAggregateOutputType | null
    _max: PartMaxAggregateOutputType | null
  }

  export type PartAvgAggregateOutputType = {
    id: number | null
    sub_category_id: number | null
    count: number | null
  }

  export type PartSumAggregateOutputType = {
    id: number | null
    sub_category_id: number | null
    count: number | null
  }

  export type PartMinAggregateOutputType = {
    id: number | null
    label: string | null
    description: string | null
    media_id: string | null
    sub_category_id: number | null
    is_bookmarked: boolean | null
    count: number | null
    tags: string | null
  }

  export type PartMaxAggregateOutputType = {
    id: number | null
    label: string | null
    description: string | null
    media_id: string | null
    sub_category_id: number | null
    is_bookmarked: boolean | null
    count: number | null
    tags: string | null
  }

  export type PartCountAggregateOutputType = {
    id: number
    label: number
    description: number
    media_id: number
    sub_category_id: number
    is_bookmarked: number
    count: number
    tags: number
    _all: number
  }


  export type PartAvgAggregateInputType = {
    id?: true
    sub_category_id?: true
    count?: true
  }

  export type PartSumAggregateInputType = {
    id?: true
    sub_category_id?: true
    count?: true
  }

  export type PartMinAggregateInputType = {
    id?: true
    label?: true
    description?: true
    media_id?: true
    sub_category_id?: true
    is_bookmarked?: true
    count?: true
    tags?: true
  }

  export type PartMaxAggregateInputType = {
    id?: true
    label?: true
    description?: true
    media_id?: true
    sub_category_id?: true
    is_bookmarked?: true
    count?: true
    tags?: true
  }

  export type PartCountAggregateInputType = {
    id?: true
    label?: true
    description?: true
    media_id?: true
    sub_category_id?: true
    is_bookmarked?: true
    count?: true
    tags?: true
    _all?: true
  }

  export type PartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Part to aggregate.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parts
    **/
    _count?: true | PartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartMaxAggregateInputType
  }

  export type GetPartAggregateType<T extends PartAggregateArgs> = {
        [P in keyof T & keyof AggregatePart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePart[P]>
      : GetScalarType<T[P], AggregatePart[P]>
  }




  export type PartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartWhereInput
    orderBy?: PartOrderByWithAggregationInput | PartOrderByWithAggregationInput[]
    by: PartScalarFieldEnum[] | PartScalarFieldEnum
    having?: PartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartCountAggregateInputType | true
    _avg?: PartAvgAggregateInputType
    _sum?: PartSumAggregateInputType
    _min?: PartMinAggregateInputType
    _max?: PartMaxAggregateInputType
  }

  export type PartGroupByOutputType = {
    id: number
    label: string
    description: string | null
    media_id: string
    sub_category_id: number
    is_bookmarked: boolean
    count: number
    tags: string | null
    _count: PartCountAggregateOutputType | null
    _avg: PartAvgAggregateOutputType | null
    _sum: PartSumAggregateOutputType | null
    _min: PartMinAggregateOutputType | null
    _max: PartMaxAggregateOutputType | null
  }

  type GetPartGroupByPayload<T extends PartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartGroupByOutputType[P]>
            : GetScalarType<T[P], PartGroupByOutputType[P]>
        }
      >
    >


  export type PartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    description?: boolean
    media_id?: boolean
    sub_category_id?: boolean
    is_bookmarked?: boolean
    count?: boolean
    tags?: boolean
    media?: boolean | MediaDefaultArgs<ExtArgs>
    subCategory?: boolean | SubCategoryDefaultArgs<ExtArgs>
    partSizes?: boolean | Part$partSizesArgs<ExtArgs>
    _count?: boolean | PartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["part"]>

  export type PartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    description?: boolean
    media_id?: boolean
    sub_category_id?: boolean
    is_bookmarked?: boolean
    count?: boolean
    tags?: boolean
    media?: boolean | MediaDefaultArgs<ExtArgs>
    subCategory?: boolean | SubCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["part"]>

  export type PartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    description?: boolean
    media_id?: boolean
    sub_category_id?: boolean
    is_bookmarked?: boolean
    count?: boolean
    tags?: boolean
    media?: boolean | MediaDefaultArgs<ExtArgs>
    subCategory?: boolean | SubCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["part"]>

  export type PartSelectScalar = {
    id?: boolean
    label?: boolean
    description?: boolean
    media_id?: boolean
    sub_category_id?: boolean
    is_bookmarked?: boolean
    count?: boolean
    tags?: boolean
  }

  export type PartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label" | "description" | "media_id" | "sub_category_id" | "is_bookmarked" | "count" | "tags", ExtArgs["result"]["part"]>
  export type PartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | MediaDefaultArgs<ExtArgs>
    subCategory?: boolean | SubCategoryDefaultArgs<ExtArgs>
    partSizes?: boolean | Part$partSizesArgs<ExtArgs>
    _count?: boolean | PartCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | MediaDefaultArgs<ExtArgs>
    subCategory?: boolean | SubCategoryDefaultArgs<ExtArgs>
  }
  export type PartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | MediaDefaultArgs<ExtArgs>
    subCategory?: boolean | SubCategoryDefaultArgs<ExtArgs>
  }

  export type $PartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Part"
    objects: {
      media: Prisma.$MediaPayload<ExtArgs>
      subCategory: Prisma.$SubCategoryPayload<ExtArgs>
      partSizes: Prisma.$PartSizePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      label: string
      description: string | null
      media_id: string
      sub_category_id: number
      is_bookmarked: boolean
      count: number
      tags: string | null
    }, ExtArgs["result"]["part"]>
    composites: {}
  }

  type PartGetPayload<S extends boolean | null | undefined | PartDefaultArgs> = $Result.GetResult<Prisma.$PartPayload, S>

  type PartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartCountAggregateInputType | true
    }

  export interface PartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Part'], meta: { name: 'Part' } }
    /**
     * Find zero or one Part that matches the filter.
     * @param {PartFindUniqueArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartFindUniqueArgs>(args: SelectSubset<T, PartFindUniqueArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Part that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartFindUniqueOrThrowArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartFindUniqueOrThrowArgs>(args: SelectSubset<T, PartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Part that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartFindFirstArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartFindFirstArgs>(args?: SelectSubset<T, PartFindFirstArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Part that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartFindFirstOrThrowArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartFindFirstOrThrowArgs>(args?: SelectSubset<T, PartFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parts
     * const parts = await prisma.part.findMany()
     * 
     * // Get first 10 Parts
     * const parts = await prisma.part.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partWithIdOnly = await prisma.part.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartFindManyArgs>(args?: SelectSubset<T, PartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Part.
     * @param {PartCreateArgs} args - Arguments to create a Part.
     * @example
     * // Create one Part
     * const Part = await prisma.part.create({
     *   data: {
     *     // ... data to create a Part
     *   }
     * })
     * 
     */
    create<T extends PartCreateArgs>(args: SelectSubset<T, PartCreateArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parts.
     * @param {PartCreateManyArgs} args - Arguments to create many Parts.
     * @example
     * // Create many Parts
     * const part = await prisma.part.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartCreateManyArgs>(args?: SelectSubset<T, PartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parts and returns the data saved in the database.
     * @param {PartCreateManyAndReturnArgs} args - Arguments to create many Parts.
     * @example
     * // Create many Parts
     * const part = await prisma.part.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parts and only return the `id`
     * const partWithIdOnly = await prisma.part.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartCreateManyAndReturnArgs>(args?: SelectSubset<T, PartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Part.
     * @param {PartDeleteArgs} args - Arguments to delete one Part.
     * @example
     * // Delete one Part
     * const Part = await prisma.part.delete({
     *   where: {
     *     // ... filter to delete one Part
     *   }
     * })
     * 
     */
    delete<T extends PartDeleteArgs>(args: SelectSubset<T, PartDeleteArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Part.
     * @param {PartUpdateArgs} args - Arguments to update one Part.
     * @example
     * // Update one Part
     * const part = await prisma.part.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartUpdateArgs>(args: SelectSubset<T, PartUpdateArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parts.
     * @param {PartDeleteManyArgs} args - Arguments to filter Parts to delete.
     * @example
     * // Delete a few Parts
     * const { count } = await prisma.part.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartDeleteManyArgs>(args?: SelectSubset<T, PartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parts
     * const part = await prisma.part.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartUpdateManyArgs>(args: SelectSubset<T, PartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parts and returns the data updated in the database.
     * @param {PartUpdateManyAndReturnArgs} args - Arguments to update many Parts.
     * @example
     * // Update many Parts
     * const part = await prisma.part.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parts and only return the `id`
     * const partWithIdOnly = await prisma.part.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PartUpdateManyAndReturnArgs>(args: SelectSubset<T, PartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Part.
     * @param {PartUpsertArgs} args - Arguments to update or create a Part.
     * @example
     * // Update or create a Part
     * const part = await prisma.part.upsert({
     *   create: {
     *     // ... data to create a Part
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Part we want to update
     *   }
     * })
     */
    upsert<T extends PartUpsertArgs>(args: SelectSubset<T, PartUpsertArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartCountArgs} args - Arguments to filter Parts to count.
     * @example
     * // Count the number of Parts
     * const count = await prisma.part.count({
     *   where: {
     *     // ... the filter for the Parts we want to count
     *   }
     * })
    **/
    count<T extends PartCountArgs>(
      args?: Subset<T, PartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Part.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartAggregateArgs>(args: Subset<T, PartAggregateArgs>): Prisma.PrismaPromise<GetPartAggregateType<T>>

    /**
     * Group by Part.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartGroupByArgs['orderBy'] }
        : { orderBy?: PartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Part model
   */
  readonly fields: PartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Part.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    media<T extends MediaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MediaDefaultArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subCategory<T extends SubCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubCategoryDefaultArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    partSizes<T extends Part$partSizesArgs<ExtArgs> = {}>(args?: Subset<T, Part$partSizesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartSizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Part model
   */
  interface PartFieldRefs {
    readonly id: FieldRef<"Part", 'Int'>
    readonly label: FieldRef<"Part", 'String'>
    readonly description: FieldRef<"Part", 'String'>
    readonly media_id: FieldRef<"Part", 'String'>
    readonly sub_category_id: FieldRef<"Part", 'Int'>
    readonly is_bookmarked: FieldRef<"Part", 'Boolean'>
    readonly count: FieldRef<"Part", 'Int'>
    readonly tags: FieldRef<"Part", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Part findUnique
   */
  export type PartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part findUniqueOrThrow
   */
  export type PartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part findFirst
   */
  export type PartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parts.
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parts.
     */
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * Part findFirstOrThrow
   */
  export type PartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parts.
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parts.
     */
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * Part findMany
   */
  export type PartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Parts to fetch.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parts.
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * Part create
   */
  export type PartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * The data needed to create a Part.
     */
    data: XOR<PartCreateInput, PartUncheckedCreateInput>
  }

  /**
   * Part createMany
   */
  export type PartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parts.
     */
    data: PartCreateManyInput | PartCreateManyInput[]
  }

  /**
   * Part createManyAndReturn
   */
  export type PartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * The data used to create many Parts.
     */
    data: PartCreateManyInput | PartCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Part update
   */
  export type PartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * The data needed to update a Part.
     */
    data: XOR<PartUpdateInput, PartUncheckedUpdateInput>
    /**
     * Choose, which Part to update.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part updateMany
   */
  export type PartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parts.
     */
    data: XOR<PartUpdateManyMutationInput, PartUncheckedUpdateManyInput>
    /**
     * Filter which Parts to update
     */
    where?: PartWhereInput
    /**
     * Limit how many Parts to update.
     */
    limit?: number
  }

  /**
   * Part updateManyAndReturn
   */
  export type PartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * The data used to update Parts.
     */
    data: XOR<PartUpdateManyMutationInput, PartUncheckedUpdateManyInput>
    /**
     * Filter which Parts to update
     */
    where?: PartWhereInput
    /**
     * Limit how many Parts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Part upsert
   */
  export type PartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * The filter to search for the Part to update in case it exists.
     */
    where: PartWhereUniqueInput
    /**
     * In case the Part found by the `where` argument doesn't exist, create a new Part with this data.
     */
    create: XOR<PartCreateInput, PartUncheckedCreateInput>
    /**
     * In case the Part was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartUpdateInput, PartUncheckedUpdateInput>
  }

  /**
   * Part delete
   */
  export type PartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter which Part to delete.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part deleteMany
   */
  export type PartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parts to delete
     */
    where?: PartWhereInput
    /**
     * Limit how many Parts to delete.
     */
    limit?: number
  }

  /**
   * Part.partSizes
   */
  export type Part$partSizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartSize
     */
    select?: PartSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartSize
     */
    omit?: PartSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartSizeInclude<ExtArgs> | null
    where?: PartSizeWhereInput
    orderBy?: PartSizeOrderByWithRelationInput | PartSizeOrderByWithRelationInput[]
    cursor?: PartSizeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartSizeScalarFieldEnum | PartSizeScalarFieldEnum[]
  }

  /**
   * Part without action
   */
  export type PartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
  }


  /**
   * Model PartSize
   */

  export type AggregatePartSize = {
    _count: PartSizeCountAggregateOutputType | null
    _avg: PartSizeAvgAggregateOutputType | null
    _sum: PartSizeSumAggregateOutputType | null
    _min: PartSizeMinAggregateOutputType | null
    _max: PartSizeMaxAggregateOutputType | null
  }

  export type PartSizeAvgAggregateOutputType = {
    id: number | null
    price: number | null
    part_id: number | null
  }

  export type PartSizeSumAggregateOutputType = {
    id: number | null
    price: number | null
    part_id: number | null
  }

  export type PartSizeMinAggregateOutputType = {
    id: number | null
    code: string | null
    price: number | null
    size: string | null
    width: string | null
    height: string | null
    thickness: string | null
    RS1: string | null
    RS2: string | null
    design_file: Bytes | null
    is_bookmarked: boolean | null
    meta: string | null
    part_id: number | null
  }

  export type PartSizeMaxAggregateOutputType = {
    id: number | null
    code: string | null
    price: number | null
    size: string | null
    width: string | null
    height: string | null
    thickness: string | null
    RS1: string | null
    RS2: string | null
    design_file: Bytes | null
    is_bookmarked: boolean | null
    meta: string | null
    part_id: number | null
  }

  export type PartSizeCountAggregateOutputType = {
    id: number
    code: number
    price: number
    size: number
    width: number
    height: number
    thickness: number
    RS1: number
    RS2: number
    design_file: number
    is_bookmarked: number
    meta: number
    part_id: number
    _all: number
  }


  export type PartSizeAvgAggregateInputType = {
    id?: true
    price?: true
    part_id?: true
  }

  export type PartSizeSumAggregateInputType = {
    id?: true
    price?: true
    part_id?: true
  }

  export type PartSizeMinAggregateInputType = {
    id?: true
    code?: true
    price?: true
    size?: true
    width?: true
    height?: true
    thickness?: true
    RS1?: true
    RS2?: true
    design_file?: true
    is_bookmarked?: true
    meta?: true
    part_id?: true
  }

  export type PartSizeMaxAggregateInputType = {
    id?: true
    code?: true
    price?: true
    size?: true
    width?: true
    height?: true
    thickness?: true
    RS1?: true
    RS2?: true
    design_file?: true
    is_bookmarked?: true
    meta?: true
    part_id?: true
  }

  export type PartSizeCountAggregateInputType = {
    id?: true
    code?: true
    price?: true
    size?: true
    width?: true
    height?: true
    thickness?: true
    RS1?: true
    RS2?: true
    design_file?: true
    is_bookmarked?: true
    meta?: true
    part_id?: true
    _all?: true
  }

  export type PartSizeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartSize to aggregate.
     */
    where?: PartSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartSizes to fetch.
     */
    orderBy?: PartSizeOrderByWithRelationInput | PartSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PartSizes
    **/
    _count?: true | PartSizeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartSizeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartSizeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartSizeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartSizeMaxAggregateInputType
  }

  export type GetPartSizeAggregateType<T extends PartSizeAggregateArgs> = {
        [P in keyof T & keyof AggregatePartSize]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartSize[P]>
      : GetScalarType<T[P], AggregatePartSize[P]>
  }




  export type PartSizeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartSizeWhereInput
    orderBy?: PartSizeOrderByWithAggregationInput | PartSizeOrderByWithAggregationInput[]
    by: PartSizeScalarFieldEnum[] | PartSizeScalarFieldEnum
    having?: PartSizeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartSizeCountAggregateInputType | true
    _avg?: PartSizeAvgAggregateInputType
    _sum?: PartSizeSumAggregateInputType
    _min?: PartSizeMinAggregateInputType
    _max?: PartSizeMaxAggregateInputType
  }

  export type PartSizeGroupByOutputType = {
    id: number
    code: string
    price: number
    size: string
    width: string
    height: string
    thickness: string | null
    RS1: string | null
    RS2: string | null
    design_file: Bytes
    is_bookmarked: boolean
    meta: string
    part_id: number
    _count: PartSizeCountAggregateOutputType | null
    _avg: PartSizeAvgAggregateOutputType | null
    _sum: PartSizeSumAggregateOutputType | null
    _min: PartSizeMinAggregateOutputType | null
    _max: PartSizeMaxAggregateOutputType | null
  }

  type GetPartSizeGroupByPayload<T extends PartSizeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartSizeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartSizeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartSizeGroupByOutputType[P]>
            : GetScalarType<T[P], PartSizeGroupByOutputType[P]>
        }
      >
    >


  export type PartSizeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    price?: boolean
    size?: boolean
    width?: boolean
    height?: boolean
    thickness?: boolean
    RS1?: boolean
    RS2?: boolean
    design_file?: boolean
    is_bookmarked?: boolean
    meta?: boolean
    part_id?: boolean
    part?: boolean | PartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partSize"]>

  export type PartSizeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    price?: boolean
    size?: boolean
    width?: boolean
    height?: boolean
    thickness?: boolean
    RS1?: boolean
    RS2?: boolean
    design_file?: boolean
    is_bookmarked?: boolean
    meta?: boolean
    part_id?: boolean
    part?: boolean | PartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partSize"]>

  export type PartSizeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    price?: boolean
    size?: boolean
    width?: boolean
    height?: boolean
    thickness?: boolean
    RS1?: boolean
    RS2?: boolean
    design_file?: boolean
    is_bookmarked?: boolean
    meta?: boolean
    part_id?: boolean
    part?: boolean | PartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partSize"]>

  export type PartSizeSelectScalar = {
    id?: boolean
    code?: boolean
    price?: boolean
    size?: boolean
    width?: boolean
    height?: boolean
    thickness?: boolean
    RS1?: boolean
    RS2?: boolean
    design_file?: boolean
    is_bookmarked?: boolean
    meta?: boolean
    part_id?: boolean
  }

  export type PartSizeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "price" | "size" | "width" | "height" | "thickness" | "RS1" | "RS2" | "design_file" | "is_bookmarked" | "meta" | "part_id", ExtArgs["result"]["partSize"]>
  export type PartSizeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    part?: boolean | PartDefaultArgs<ExtArgs>
  }
  export type PartSizeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    part?: boolean | PartDefaultArgs<ExtArgs>
  }
  export type PartSizeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    part?: boolean | PartDefaultArgs<ExtArgs>
  }

  export type $PartSizePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PartSize"
    objects: {
      part: Prisma.$PartPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      price: number
      size: string
      width: string
      height: string
      thickness: string | null
      RS1: string | null
      RS2: string | null
      design_file: Prisma.Bytes
      is_bookmarked: boolean
      meta: string
      part_id: number
    }, ExtArgs["result"]["partSize"]>
    composites: {}
  }

  type PartSizeGetPayload<S extends boolean | null | undefined | PartSizeDefaultArgs> = $Result.GetResult<Prisma.$PartSizePayload, S>

  type PartSizeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartSizeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartSizeCountAggregateInputType | true
    }

  export interface PartSizeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PartSize'], meta: { name: 'PartSize' } }
    /**
     * Find zero or one PartSize that matches the filter.
     * @param {PartSizeFindUniqueArgs} args - Arguments to find a PartSize
     * @example
     * // Get one PartSize
     * const partSize = await prisma.partSize.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartSizeFindUniqueArgs>(args: SelectSubset<T, PartSizeFindUniqueArgs<ExtArgs>>): Prisma__PartSizeClient<$Result.GetResult<Prisma.$PartSizePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PartSize that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartSizeFindUniqueOrThrowArgs} args - Arguments to find a PartSize
     * @example
     * // Get one PartSize
     * const partSize = await prisma.partSize.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartSizeFindUniqueOrThrowArgs>(args: SelectSubset<T, PartSizeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartSizeClient<$Result.GetResult<Prisma.$PartSizePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PartSize that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartSizeFindFirstArgs} args - Arguments to find a PartSize
     * @example
     * // Get one PartSize
     * const partSize = await prisma.partSize.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartSizeFindFirstArgs>(args?: SelectSubset<T, PartSizeFindFirstArgs<ExtArgs>>): Prisma__PartSizeClient<$Result.GetResult<Prisma.$PartSizePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PartSize that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartSizeFindFirstOrThrowArgs} args - Arguments to find a PartSize
     * @example
     * // Get one PartSize
     * const partSize = await prisma.partSize.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartSizeFindFirstOrThrowArgs>(args?: SelectSubset<T, PartSizeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartSizeClient<$Result.GetResult<Prisma.$PartSizePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PartSizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartSizeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PartSizes
     * const partSizes = await prisma.partSize.findMany()
     * 
     * // Get first 10 PartSizes
     * const partSizes = await prisma.partSize.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partSizeWithIdOnly = await prisma.partSize.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartSizeFindManyArgs>(args?: SelectSubset<T, PartSizeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartSizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PartSize.
     * @param {PartSizeCreateArgs} args - Arguments to create a PartSize.
     * @example
     * // Create one PartSize
     * const PartSize = await prisma.partSize.create({
     *   data: {
     *     // ... data to create a PartSize
     *   }
     * })
     * 
     */
    create<T extends PartSizeCreateArgs>(args: SelectSubset<T, PartSizeCreateArgs<ExtArgs>>): Prisma__PartSizeClient<$Result.GetResult<Prisma.$PartSizePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PartSizes.
     * @param {PartSizeCreateManyArgs} args - Arguments to create many PartSizes.
     * @example
     * // Create many PartSizes
     * const partSize = await prisma.partSize.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartSizeCreateManyArgs>(args?: SelectSubset<T, PartSizeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PartSizes and returns the data saved in the database.
     * @param {PartSizeCreateManyAndReturnArgs} args - Arguments to create many PartSizes.
     * @example
     * // Create many PartSizes
     * const partSize = await prisma.partSize.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PartSizes and only return the `id`
     * const partSizeWithIdOnly = await prisma.partSize.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartSizeCreateManyAndReturnArgs>(args?: SelectSubset<T, PartSizeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartSizePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PartSize.
     * @param {PartSizeDeleteArgs} args - Arguments to delete one PartSize.
     * @example
     * // Delete one PartSize
     * const PartSize = await prisma.partSize.delete({
     *   where: {
     *     // ... filter to delete one PartSize
     *   }
     * })
     * 
     */
    delete<T extends PartSizeDeleteArgs>(args: SelectSubset<T, PartSizeDeleteArgs<ExtArgs>>): Prisma__PartSizeClient<$Result.GetResult<Prisma.$PartSizePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PartSize.
     * @param {PartSizeUpdateArgs} args - Arguments to update one PartSize.
     * @example
     * // Update one PartSize
     * const partSize = await prisma.partSize.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartSizeUpdateArgs>(args: SelectSubset<T, PartSizeUpdateArgs<ExtArgs>>): Prisma__PartSizeClient<$Result.GetResult<Prisma.$PartSizePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PartSizes.
     * @param {PartSizeDeleteManyArgs} args - Arguments to filter PartSizes to delete.
     * @example
     * // Delete a few PartSizes
     * const { count } = await prisma.partSize.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartSizeDeleteManyArgs>(args?: SelectSubset<T, PartSizeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartSizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartSizeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PartSizes
     * const partSize = await prisma.partSize.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartSizeUpdateManyArgs>(args: SelectSubset<T, PartSizeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartSizes and returns the data updated in the database.
     * @param {PartSizeUpdateManyAndReturnArgs} args - Arguments to update many PartSizes.
     * @example
     * // Update many PartSizes
     * const partSize = await prisma.partSize.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PartSizes and only return the `id`
     * const partSizeWithIdOnly = await prisma.partSize.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PartSizeUpdateManyAndReturnArgs>(args: SelectSubset<T, PartSizeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartSizePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PartSize.
     * @param {PartSizeUpsertArgs} args - Arguments to update or create a PartSize.
     * @example
     * // Update or create a PartSize
     * const partSize = await prisma.partSize.upsert({
     *   create: {
     *     // ... data to create a PartSize
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PartSize we want to update
     *   }
     * })
     */
    upsert<T extends PartSizeUpsertArgs>(args: SelectSubset<T, PartSizeUpsertArgs<ExtArgs>>): Prisma__PartSizeClient<$Result.GetResult<Prisma.$PartSizePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PartSizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartSizeCountArgs} args - Arguments to filter PartSizes to count.
     * @example
     * // Count the number of PartSizes
     * const count = await prisma.partSize.count({
     *   where: {
     *     // ... the filter for the PartSizes we want to count
     *   }
     * })
    **/
    count<T extends PartSizeCountArgs>(
      args?: Subset<T, PartSizeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartSizeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PartSize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartSizeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartSizeAggregateArgs>(args: Subset<T, PartSizeAggregateArgs>): Prisma.PrismaPromise<GetPartSizeAggregateType<T>>

    /**
     * Group by PartSize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartSizeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartSizeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartSizeGroupByArgs['orderBy'] }
        : { orderBy?: PartSizeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartSizeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartSizeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PartSize model
   */
  readonly fields: PartSizeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PartSize.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartSizeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    part<T extends PartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PartDefaultArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PartSize model
   */
  interface PartSizeFieldRefs {
    readonly id: FieldRef<"PartSize", 'Int'>
    readonly code: FieldRef<"PartSize", 'String'>
    readonly price: FieldRef<"PartSize", 'Float'>
    readonly size: FieldRef<"PartSize", 'String'>
    readonly width: FieldRef<"PartSize", 'String'>
    readonly height: FieldRef<"PartSize", 'String'>
    readonly thickness: FieldRef<"PartSize", 'String'>
    readonly RS1: FieldRef<"PartSize", 'String'>
    readonly RS2: FieldRef<"PartSize", 'String'>
    readonly design_file: FieldRef<"PartSize", 'Bytes'>
    readonly is_bookmarked: FieldRef<"PartSize", 'Boolean'>
    readonly meta: FieldRef<"PartSize", 'String'>
    readonly part_id: FieldRef<"PartSize", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PartSize findUnique
   */
  export type PartSizeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartSize
     */
    select?: PartSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartSize
     */
    omit?: PartSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartSizeInclude<ExtArgs> | null
    /**
     * Filter, which PartSize to fetch.
     */
    where: PartSizeWhereUniqueInput
  }

  /**
   * PartSize findUniqueOrThrow
   */
  export type PartSizeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartSize
     */
    select?: PartSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartSize
     */
    omit?: PartSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartSizeInclude<ExtArgs> | null
    /**
     * Filter, which PartSize to fetch.
     */
    where: PartSizeWhereUniqueInput
  }

  /**
   * PartSize findFirst
   */
  export type PartSizeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartSize
     */
    select?: PartSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartSize
     */
    omit?: PartSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartSizeInclude<ExtArgs> | null
    /**
     * Filter, which PartSize to fetch.
     */
    where?: PartSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartSizes to fetch.
     */
    orderBy?: PartSizeOrderByWithRelationInput | PartSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartSizes.
     */
    cursor?: PartSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartSizes.
     */
    distinct?: PartSizeScalarFieldEnum | PartSizeScalarFieldEnum[]
  }

  /**
   * PartSize findFirstOrThrow
   */
  export type PartSizeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartSize
     */
    select?: PartSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartSize
     */
    omit?: PartSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartSizeInclude<ExtArgs> | null
    /**
     * Filter, which PartSize to fetch.
     */
    where?: PartSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartSizes to fetch.
     */
    orderBy?: PartSizeOrderByWithRelationInput | PartSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartSizes.
     */
    cursor?: PartSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartSizes.
     */
    distinct?: PartSizeScalarFieldEnum | PartSizeScalarFieldEnum[]
  }

  /**
   * PartSize findMany
   */
  export type PartSizeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartSize
     */
    select?: PartSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartSize
     */
    omit?: PartSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartSizeInclude<ExtArgs> | null
    /**
     * Filter, which PartSizes to fetch.
     */
    where?: PartSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartSizes to fetch.
     */
    orderBy?: PartSizeOrderByWithRelationInput | PartSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PartSizes.
     */
    cursor?: PartSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartSizes.
     */
    skip?: number
    distinct?: PartSizeScalarFieldEnum | PartSizeScalarFieldEnum[]
  }

  /**
   * PartSize create
   */
  export type PartSizeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartSize
     */
    select?: PartSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartSize
     */
    omit?: PartSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartSizeInclude<ExtArgs> | null
    /**
     * The data needed to create a PartSize.
     */
    data: XOR<PartSizeCreateInput, PartSizeUncheckedCreateInput>
  }

  /**
   * PartSize createMany
   */
  export type PartSizeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PartSizes.
     */
    data: PartSizeCreateManyInput | PartSizeCreateManyInput[]
  }

  /**
   * PartSize createManyAndReturn
   */
  export type PartSizeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartSize
     */
    select?: PartSizeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PartSize
     */
    omit?: PartSizeOmit<ExtArgs> | null
    /**
     * The data used to create many PartSizes.
     */
    data: PartSizeCreateManyInput | PartSizeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartSizeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PartSize update
   */
  export type PartSizeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartSize
     */
    select?: PartSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartSize
     */
    omit?: PartSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartSizeInclude<ExtArgs> | null
    /**
     * The data needed to update a PartSize.
     */
    data: XOR<PartSizeUpdateInput, PartSizeUncheckedUpdateInput>
    /**
     * Choose, which PartSize to update.
     */
    where: PartSizeWhereUniqueInput
  }

  /**
   * PartSize updateMany
   */
  export type PartSizeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PartSizes.
     */
    data: XOR<PartSizeUpdateManyMutationInput, PartSizeUncheckedUpdateManyInput>
    /**
     * Filter which PartSizes to update
     */
    where?: PartSizeWhereInput
    /**
     * Limit how many PartSizes to update.
     */
    limit?: number
  }

  /**
   * PartSize updateManyAndReturn
   */
  export type PartSizeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartSize
     */
    select?: PartSizeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PartSize
     */
    omit?: PartSizeOmit<ExtArgs> | null
    /**
     * The data used to update PartSizes.
     */
    data: XOR<PartSizeUpdateManyMutationInput, PartSizeUncheckedUpdateManyInput>
    /**
     * Filter which PartSizes to update
     */
    where?: PartSizeWhereInput
    /**
     * Limit how many PartSizes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartSizeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PartSize upsert
   */
  export type PartSizeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartSize
     */
    select?: PartSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartSize
     */
    omit?: PartSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartSizeInclude<ExtArgs> | null
    /**
     * The filter to search for the PartSize to update in case it exists.
     */
    where: PartSizeWhereUniqueInput
    /**
     * In case the PartSize found by the `where` argument doesn't exist, create a new PartSize with this data.
     */
    create: XOR<PartSizeCreateInput, PartSizeUncheckedCreateInput>
    /**
     * In case the PartSize was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartSizeUpdateInput, PartSizeUncheckedUpdateInput>
  }

  /**
   * PartSize delete
   */
  export type PartSizeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartSize
     */
    select?: PartSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartSize
     */
    omit?: PartSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartSizeInclude<ExtArgs> | null
    /**
     * Filter which PartSize to delete.
     */
    where: PartSizeWhereUniqueInput
  }

  /**
   * PartSize deleteMany
   */
  export type PartSizeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartSizes to delete
     */
    where?: PartSizeWhereInput
    /**
     * Limit how many PartSizes to delete.
     */
    limit?: number
  }

  /**
   * PartSize without action
   */
  export type PartSizeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartSize
     */
    select?: PartSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartSize
     */
    omit?: PartSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartSizeInclude<ExtArgs> | null
  }


  /**
   * Model Media
   */

  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  export type MediaMinAggregateOutputType = {
    id: string | null
    image: Bytes | null
    type: string | null
  }

  export type MediaMaxAggregateOutputType = {
    id: string | null
    image: Bytes | null
    type: string | null
  }

  export type MediaCountAggregateOutputType = {
    id: number
    image: number
    type: number
    _all: number
  }


  export type MediaMinAggregateInputType = {
    id?: true
    image?: true
    type?: true
  }

  export type MediaMaxAggregateInputType = {
    id?: true
    image?: true
    type?: true
  }

  export type MediaCountAggregateInputType = {
    id?: true
    image?: true
    type?: true
    _all?: true
  }

  export type MediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to aggregate.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Media
    **/
    _count?: true | MediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaMaxAggregateInputType
  }

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>
  }




  export type MediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithAggregationInput | MediaOrderByWithAggregationInput[]
    by: MediaScalarFieldEnum[] | MediaScalarFieldEnum
    having?: MediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaCountAggregateInputType | true
    _min?: MediaMinAggregateInputType
    _max?: MediaMaxAggregateInputType
  }

  export type MediaGroupByOutputType = {
    id: string
    image: Bytes
    type: string
    _count: MediaCountAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  type GetMediaGroupByPayload<T extends MediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaGroupByOutputType[P]>
        }
      >
    >


  export type MediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    type?: boolean
    Category?: boolean | Media$CategoryArgs<ExtArgs>
    SubCategory?: boolean | Media$SubCategoryArgs<ExtArgs>
    Part?: boolean | Media$PartArgs<ExtArgs>
    _count?: boolean | MediaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    type?: boolean
  }, ExtArgs["result"]["media"]>

  export type MediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    type?: boolean
  }, ExtArgs["result"]["media"]>

  export type MediaSelectScalar = {
    id?: boolean
    image?: boolean
    type?: boolean
  }

  export type MediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "image" | "type", ExtArgs["result"]["media"]>
  export type MediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category?: boolean | Media$CategoryArgs<ExtArgs>
    SubCategory?: boolean | Media$SubCategoryArgs<ExtArgs>
    Part?: boolean | Media$PartArgs<ExtArgs>
    _count?: boolean | MediaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Media"
    objects: {
      Category: Prisma.$CategoryPayload<ExtArgs>[]
      SubCategory: Prisma.$SubCategoryPayload<ExtArgs>[]
      Part: Prisma.$PartPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      image: Prisma.Bytes
      type: string
    }, ExtArgs["result"]["media"]>
    composites: {}
  }

  type MediaGetPayload<S extends boolean | null | undefined | MediaDefaultArgs> = $Result.GetResult<Prisma.$MediaPayload, S>

  type MediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaCountAggregateInputType | true
    }

  export interface MediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Media'], meta: { name: 'Media' } }
    /**
     * Find zero or one Media that matches the filter.
     * @param {MediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaFindUniqueArgs>(args: SelectSubset<T, MediaFindUniqueArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Media that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaFindUniqueOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaFindFirstArgs>(args?: SelectSubset<T, MediaFindFirstArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     * 
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaWithIdOnly = await prisma.media.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaFindManyArgs>(args?: SelectSubset<T, MediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Media.
     * @param {MediaCreateArgs} args - Arguments to create a Media.
     * @example
     * // Create one Media
     * const Media = await prisma.media.create({
     *   data: {
     *     // ... data to create a Media
     *   }
     * })
     * 
     */
    create<T extends MediaCreateArgs>(args: SelectSubset<T, MediaCreateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Media.
     * @param {MediaCreateManyArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaCreateManyArgs>(args?: SelectSubset<T, MediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Media and returns the data saved in the database.
     * @param {MediaCreateManyAndReturnArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Media.
     * @param {MediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     * 
     */
    delete<T extends MediaDeleteArgs>(args: SelectSubset<T, MediaDeleteArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Media.
     * @param {MediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaUpdateArgs>(args: SelectSubset<T, MediaUpdateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Media.
     * @param {MediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaDeleteManyArgs>(args?: SelectSubset<T, MediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaUpdateManyArgs>(args: SelectSubset<T, MediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media and returns the data updated in the database.
     * @param {MediaUpdateManyAndReturnArgs} args - Arguments to update many Media.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MediaUpdateManyAndReturnArgs>(args: SelectSubset<T, MediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Media.
     * @param {MediaUpsertArgs} args - Arguments to update or create a Media.
     * @example
     * // Update or create a Media
     * const media = await prisma.media.upsert({
     *   create: {
     *     // ... data to create a Media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media we want to update
     *   }
     * })
     */
    upsert<T extends MediaUpsertArgs>(args: SelectSubset<T, MediaUpsertArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
    **/
    count<T extends MediaCountArgs>(
      args?: Subset<T, MediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediaAggregateArgs>(args: Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaGroupByArgs['orderBy'] }
        : { orderBy?: MediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Media model
   */
  readonly fields: MediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Category<T extends Media$CategoryArgs<ExtArgs> = {}>(args?: Subset<T, Media$CategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    SubCategory<T extends Media$SubCategoryArgs<ExtArgs> = {}>(args?: Subset<T, Media$SubCategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Part<T extends Media$PartArgs<ExtArgs> = {}>(args?: Subset<T, Media$PartArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Media model
   */
  interface MediaFieldRefs {
    readonly id: FieldRef<"Media", 'String'>
    readonly image: FieldRef<"Media", 'Bytes'>
    readonly type: FieldRef<"Media", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Media findUnique
   */
  export type MediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findUniqueOrThrow
   */
  export type MediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findFirst
   */
  export type MediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findFirstOrThrow
   */
  export type MediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findMany
   */
  export type MediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media create
   */
  export type MediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to create a Media.
     */
    data: XOR<MediaCreateInput, MediaUncheckedCreateInput>
  }

  /**
   * Media createMany
   */
  export type MediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
  }

  /**
   * Media createManyAndReturn
   */
  export type MediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
  }

  /**
   * Media update
   */
  export type MediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to update a Media.
     */
    data: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
    /**
     * Choose, which Media to update.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media updateMany
   */
  export type MediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
  }

  /**
   * Media updateManyAndReturn
   */
  export type MediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
  }

  /**
   * Media upsert
   */
  export type MediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The filter to search for the Media to update in case it exists.
     */
    where: MediaWhereUniqueInput
    /**
     * In case the Media found by the `where` argument doesn't exist, create a new Media with this data.
     */
    create: XOR<MediaCreateInput, MediaUncheckedCreateInput>
    /**
     * In case the Media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
  }

  /**
   * Media delete
   */
  export type MediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter which Media to delete.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media deleteMany
   */
  export type MediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to delete
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to delete.
     */
    limit?: number
  }

  /**
   * Media.Category
   */
  export type Media$CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Media.SubCategory
   */
  export type Media$SubCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    where?: SubCategoryWhereInput
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    cursor?: SubCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }

  /**
   * Media.Part
   */
  export type Media$PartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    where?: PartWhereInput
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    cursor?: PartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * Media without action
   */
  export type MediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    label: 'label',
    description: 'description',
    media_id: 'media_id'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const SubCategoryScalarFieldEnum: {
    id: 'id',
    label: 'label',
    media_id: 'media_id',
    category_id: 'category_id',
    parent_id: 'parent_id'
  };

  export type SubCategoryScalarFieldEnum = (typeof SubCategoryScalarFieldEnum)[keyof typeof SubCategoryScalarFieldEnum]


  export const PartScalarFieldEnum: {
    id: 'id',
    label: 'label',
    description: 'description',
    media_id: 'media_id',
    sub_category_id: 'sub_category_id',
    is_bookmarked: 'is_bookmarked',
    count: 'count',
    tags: 'tags'
  };

  export type PartScalarFieldEnum = (typeof PartScalarFieldEnum)[keyof typeof PartScalarFieldEnum]


  export const PartSizeScalarFieldEnum: {
    id: 'id',
    code: 'code',
    price: 'price',
    size: 'size',
    width: 'width',
    height: 'height',
    thickness: 'thickness',
    RS1: 'RS1',
    RS2: 'RS2',
    design_file: 'design_file',
    is_bookmarked: 'is_bookmarked',
    meta: 'meta',
    part_id: 'part_id'
  };

  export type PartSizeScalarFieldEnum = (typeof PartSizeScalarFieldEnum)[keyof typeof PartSizeScalarFieldEnum]


  export const MediaScalarFieldEnum: {
    id: 'id',
    image: 'image',
    type: 'type'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    
  /**
   * Deep Input Types
   */


  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    label?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    media_id?: StringFilter<"Category"> | string
    media?: XOR<MediaScalarRelationFilter, MediaWhereInput>
    subCategories?: SubCategoryListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    description?: SortOrderInput | SortOrder
    media_id?: SortOrder
    media?: MediaOrderByWithRelationInput
    subCategories?: SubCategoryOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    label?: string
    media_id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    description?: StringNullableFilter<"Category"> | string | null
    media?: XOR<MediaScalarRelationFilter, MediaWhereInput>
    subCategories?: SubCategoryListRelationFilter
  }, "id" | "label" | "media_id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    description?: SortOrderInput | SortOrder
    media_id?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    label?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    media_id?: StringWithAggregatesFilter<"Category"> | string
  }

  export type SubCategoryWhereInput = {
    AND?: SubCategoryWhereInput | SubCategoryWhereInput[]
    OR?: SubCategoryWhereInput[]
    NOT?: SubCategoryWhereInput | SubCategoryWhereInput[]
    id?: IntFilter<"SubCategory"> | number
    label?: StringFilter<"SubCategory"> | string
    media_id?: StringFilter<"SubCategory"> | string
    category_id?: IntFilter<"SubCategory"> | number
    parent_id?: IntNullableFilter<"SubCategory"> | number | null
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    media?: XOR<MediaScalarRelationFilter, MediaWhereInput>
    parts?: PartListRelationFilter
    parent?: XOR<SubCategoryNullableScalarRelationFilter, SubCategoryWhereInput> | null
    children?: SubCategoryListRelationFilter
  }

  export type SubCategoryOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    media_id?: SortOrder
    category_id?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    category?: CategoryOrderByWithRelationInput
    media?: MediaOrderByWithRelationInput
    parts?: PartOrderByRelationAggregateInput
    parent?: SubCategoryOrderByWithRelationInput
    children?: SubCategoryOrderByRelationAggregateInput
  }

  export type SubCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    label?: string
    media_id?: string
    AND?: SubCategoryWhereInput | SubCategoryWhereInput[]
    OR?: SubCategoryWhereInput[]
    NOT?: SubCategoryWhereInput | SubCategoryWhereInput[]
    category_id?: IntFilter<"SubCategory"> | number
    parent_id?: IntNullableFilter<"SubCategory"> | number | null
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    media?: XOR<MediaScalarRelationFilter, MediaWhereInput>
    parts?: PartListRelationFilter
    parent?: XOR<SubCategoryNullableScalarRelationFilter, SubCategoryWhereInput> | null
    children?: SubCategoryListRelationFilter
  }, "id" | "label" | "media_id">

  export type SubCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    media_id?: SortOrder
    category_id?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    _count?: SubCategoryCountOrderByAggregateInput
    _avg?: SubCategoryAvgOrderByAggregateInput
    _max?: SubCategoryMaxOrderByAggregateInput
    _min?: SubCategoryMinOrderByAggregateInput
    _sum?: SubCategorySumOrderByAggregateInput
  }

  export type SubCategoryScalarWhereWithAggregatesInput = {
    AND?: SubCategoryScalarWhereWithAggregatesInput | SubCategoryScalarWhereWithAggregatesInput[]
    OR?: SubCategoryScalarWhereWithAggregatesInput[]
    NOT?: SubCategoryScalarWhereWithAggregatesInput | SubCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SubCategory"> | number
    label?: StringWithAggregatesFilter<"SubCategory"> | string
    media_id?: StringWithAggregatesFilter<"SubCategory"> | string
    category_id?: IntWithAggregatesFilter<"SubCategory"> | number
    parent_id?: IntNullableWithAggregatesFilter<"SubCategory"> | number | null
  }

  export type PartWhereInput = {
    AND?: PartWhereInput | PartWhereInput[]
    OR?: PartWhereInput[]
    NOT?: PartWhereInput | PartWhereInput[]
    id?: IntFilter<"Part"> | number
    label?: StringFilter<"Part"> | string
    description?: StringNullableFilter<"Part"> | string | null
    media_id?: StringFilter<"Part"> | string
    sub_category_id?: IntFilter<"Part"> | number
    is_bookmarked?: BoolFilter<"Part"> | boolean
    count?: IntFilter<"Part"> | number
    tags?: StringNullableFilter<"Part"> | string | null
    media?: XOR<MediaScalarRelationFilter, MediaWhereInput>
    subCategory?: XOR<SubCategoryScalarRelationFilter, SubCategoryWhereInput>
    partSizes?: PartSizeListRelationFilter
  }

  export type PartOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    description?: SortOrderInput | SortOrder
    media_id?: SortOrder
    sub_category_id?: SortOrder
    is_bookmarked?: SortOrder
    count?: SortOrder
    tags?: SortOrderInput | SortOrder
    media?: MediaOrderByWithRelationInput
    subCategory?: SubCategoryOrderByWithRelationInput
    partSizes?: PartSizeOrderByRelationAggregateInput
  }

  export type PartWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    media_id?: string
    AND?: PartWhereInput | PartWhereInput[]
    OR?: PartWhereInput[]
    NOT?: PartWhereInput | PartWhereInput[]
    label?: StringFilter<"Part"> | string
    description?: StringNullableFilter<"Part"> | string | null
    sub_category_id?: IntFilter<"Part"> | number
    is_bookmarked?: BoolFilter<"Part"> | boolean
    count?: IntFilter<"Part"> | number
    tags?: StringNullableFilter<"Part"> | string | null
    media?: XOR<MediaScalarRelationFilter, MediaWhereInput>
    subCategory?: XOR<SubCategoryScalarRelationFilter, SubCategoryWhereInput>
    partSizes?: PartSizeListRelationFilter
  }, "id" | "media_id">

  export type PartOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    description?: SortOrderInput | SortOrder
    media_id?: SortOrder
    sub_category_id?: SortOrder
    is_bookmarked?: SortOrder
    count?: SortOrder
    tags?: SortOrderInput | SortOrder
    _count?: PartCountOrderByAggregateInput
    _avg?: PartAvgOrderByAggregateInput
    _max?: PartMaxOrderByAggregateInput
    _min?: PartMinOrderByAggregateInput
    _sum?: PartSumOrderByAggregateInput
  }

  export type PartScalarWhereWithAggregatesInput = {
    AND?: PartScalarWhereWithAggregatesInput | PartScalarWhereWithAggregatesInput[]
    OR?: PartScalarWhereWithAggregatesInput[]
    NOT?: PartScalarWhereWithAggregatesInput | PartScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Part"> | number
    label?: StringWithAggregatesFilter<"Part"> | string
    description?: StringNullableWithAggregatesFilter<"Part"> | string | null
    media_id?: StringWithAggregatesFilter<"Part"> | string
    sub_category_id?: IntWithAggregatesFilter<"Part"> | number
    is_bookmarked?: BoolWithAggregatesFilter<"Part"> | boolean
    count?: IntWithAggregatesFilter<"Part"> | number
    tags?: StringNullableWithAggregatesFilter<"Part"> | string | null
  }

  export type PartSizeWhereInput = {
    AND?: PartSizeWhereInput | PartSizeWhereInput[]
    OR?: PartSizeWhereInput[]
    NOT?: PartSizeWhereInput | PartSizeWhereInput[]
    id?: IntFilter<"PartSize"> | number
    code?: StringFilter<"PartSize"> | string
    price?: FloatFilter<"PartSize"> | number
    size?: StringFilter<"PartSize"> | string
    width?: StringFilter<"PartSize"> | string
    height?: StringFilter<"PartSize"> | string
    thickness?: StringNullableFilter<"PartSize"> | string | null
    RS1?: StringNullableFilter<"PartSize"> | string | null
    RS2?: StringNullableFilter<"PartSize"> | string | null
    design_file?: BytesFilter<"PartSize"> | Bytes
    is_bookmarked?: BoolFilter<"PartSize"> | boolean
    meta?: StringFilter<"PartSize"> | string
    part_id?: IntFilter<"PartSize"> | number
    part?: XOR<PartScalarRelationFilter, PartWhereInput>
  }

  export type PartSizeOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    price?: SortOrder
    size?: SortOrder
    width?: SortOrder
    height?: SortOrder
    thickness?: SortOrderInput | SortOrder
    RS1?: SortOrderInput | SortOrder
    RS2?: SortOrderInput | SortOrder
    design_file?: SortOrder
    is_bookmarked?: SortOrder
    meta?: SortOrder
    part_id?: SortOrder
    part?: PartOrderByWithRelationInput
  }

  export type PartSizeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PartSizeWhereInput | PartSizeWhereInput[]
    OR?: PartSizeWhereInput[]
    NOT?: PartSizeWhereInput | PartSizeWhereInput[]
    code?: StringFilter<"PartSize"> | string
    price?: FloatFilter<"PartSize"> | number
    size?: StringFilter<"PartSize"> | string
    width?: StringFilter<"PartSize"> | string
    height?: StringFilter<"PartSize"> | string
    thickness?: StringNullableFilter<"PartSize"> | string | null
    RS1?: StringNullableFilter<"PartSize"> | string | null
    RS2?: StringNullableFilter<"PartSize"> | string | null
    design_file?: BytesFilter<"PartSize"> | Bytes
    is_bookmarked?: BoolFilter<"PartSize"> | boolean
    meta?: StringFilter<"PartSize"> | string
    part_id?: IntFilter<"PartSize"> | number
    part?: XOR<PartScalarRelationFilter, PartWhereInput>
  }, "id">

  export type PartSizeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    price?: SortOrder
    size?: SortOrder
    width?: SortOrder
    height?: SortOrder
    thickness?: SortOrderInput | SortOrder
    RS1?: SortOrderInput | SortOrder
    RS2?: SortOrderInput | SortOrder
    design_file?: SortOrder
    is_bookmarked?: SortOrder
    meta?: SortOrder
    part_id?: SortOrder
    _count?: PartSizeCountOrderByAggregateInput
    _avg?: PartSizeAvgOrderByAggregateInput
    _max?: PartSizeMaxOrderByAggregateInput
    _min?: PartSizeMinOrderByAggregateInput
    _sum?: PartSizeSumOrderByAggregateInput
  }

  export type PartSizeScalarWhereWithAggregatesInput = {
    AND?: PartSizeScalarWhereWithAggregatesInput | PartSizeScalarWhereWithAggregatesInput[]
    OR?: PartSizeScalarWhereWithAggregatesInput[]
    NOT?: PartSizeScalarWhereWithAggregatesInput | PartSizeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PartSize"> | number
    code?: StringWithAggregatesFilter<"PartSize"> | string
    price?: FloatWithAggregatesFilter<"PartSize"> | number
    size?: StringWithAggregatesFilter<"PartSize"> | string
    width?: StringWithAggregatesFilter<"PartSize"> | string
    height?: StringWithAggregatesFilter<"PartSize"> | string
    thickness?: StringNullableWithAggregatesFilter<"PartSize"> | string | null
    RS1?: StringNullableWithAggregatesFilter<"PartSize"> | string | null
    RS2?: StringNullableWithAggregatesFilter<"PartSize"> | string | null
    design_file?: BytesWithAggregatesFilter<"PartSize"> | Bytes
    is_bookmarked?: BoolWithAggregatesFilter<"PartSize"> | boolean
    meta?: StringWithAggregatesFilter<"PartSize"> | string
    part_id?: IntWithAggregatesFilter<"PartSize"> | number
  }

  export type MediaWhereInput = {
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    id?: StringFilter<"Media"> | string
    image?: BytesFilter<"Media"> | Bytes
    type?: StringFilter<"Media"> | string
    Category?: CategoryListRelationFilter
    SubCategory?: SubCategoryListRelationFilter
    Part?: PartListRelationFilter
  }

  export type MediaOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrder
    type?: SortOrder
    Category?: CategoryOrderByRelationAggregateInput
    SubCategory?: SubCategoryOrderByRelationAggregateInput
    Part?: PartOrderByRelationAggregateInput
  }

  export type MediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    image?: BytesFilter<"Media"> | Bytes
    type?: StringFilter<"Media"> | string
    Category?: CategoryListRelationFilter
    SubCategory?: SubCategoryListRelationFilter
    Part?: PartListRelationFilter
  }, "id">

  export type MediaOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrder
    type?: SortOrder
    _count?: MediaCountOrderByAggregateInput
    _max?: MediaMaxOrderByAggregateInput
    _min?: MediaMinOrderByAggregateInput
  }

  export type MediaScalarWhereWithAggregatesInput = {
    AND?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    OR?: MediaScalarWhereWithAggregatesInput[]
    NOT?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Media"> | string
    image?: BytesWithAggregatesFilter<"Media"> | Bytes
    type?: StringWithAggregatesFilter<"Media"> | string
  }

  export type CategoryCreateInput = {
    label: string
    description?: string | null
    media: MediaCreateNestedOneWithoutCategoryInput
    subCategories?: SubCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    label: string
    description?: string | null
    media_id: string
    subCategories?: SubCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    media?: MediaUpdateOneRequiredWithoutCategoryNestedInput
    subCategories?: SubCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    media_id?: StringFieldUpdateOperationsInput | string
    subCategories?: SubCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    label: string
    description?: string | null
    media_id: string
  }

  export type CategoryUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    media_id?: StringFieldUpdateOperationsInput | string
  }

  export type SubCategoryCreateInput = {
    label: string
    category: CategoryCreateNestedOneWithoutSubCategoriesInput
    media: MediaCreateNestedOneWithoutSubCategoryInput
    parts?: PartCreateNestedManyWithoutSubCategoryInput
    parent?: SubCategoryCreateNestedOneWithoutChildrenInput
    children?: SubCategoryCreateNestedManyWithoutParentInput
  }

  export type SubCategoryUncheckedCreateInput = {
    id?: number
    label: string
    media_id: string
    category_id: number
    parent_id?: number | null
    parts?: PartUncheckedCreateNestedManyWithoutSubCategoryInput
    children?: SubCategoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type SubCategoryUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutSubCategoriesNestedInput
    media?: MediaUpdateOneRequiredWithoutSubCategoryNestedInput
    parts?: PartUpdateManyWithoutSubCategoryNestedInput
    parent?: SubCategoryUpdateOneWithoutChildrenNestedInput
    children?: SubCategoryUpdateManyWithoutParentNestedInput
  }

  export type SubCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    media_id?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    parts?: PartUncheckedUpdateManyWithoutSubCategoryNestedInput
    children?: SubCategoryUncheckedUpdateManyWithoutParentNestedInput
  }

  export type SubCategoryCreateManyInput = {
    id?: number
    label: string
    media_id: string
    category_id: number
    parent_id?: number | null
  }

  export type SubCategoryUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
  }

  export type SubCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    media_id?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PartCreateInput = {
    label: string
    description?: string | null
    is_bookmarked?: boolean
    count: number
    tags?: string | null
    media: MediaCreateNestedOneWithoutPartInput
    subCategory: SubCategoryCreateNestedOneWithoutPartsInput
    partSizes?: PartSizeCreateNestedManyWithoutPartInput
  }

  export type PartUncheckedCreateInput = {
    id?: number
    label: string
    description?: string | null
    media_id: string
    sub_category_id: number
    is_bookmarked?: boolean
    count: number
    tags?: string | null
    partSizes?: PartSizeUncheckedCreateNestedManyWithoutPartInput
  }

  export type PartUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_bookmarked?: BoolFieldUpdateOperationsInput | boolean
    count?: IntFieldUpdateOperationsInput | number
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    media?: MediaUpdateOneRequiredWithoutPartNestedInput
    subCategory?: SubCategoryUpdateOneRequiredWithoutPartsNestedInput
    partSizes?: PartSizeUpdateManyWithoutPartNestedInput
  }

  export type PartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    media_id?: StringFieldUpdateOperationsInput | string
    sub_category_id?: IntFieldUpdateOperationsInput | number
    is_bookmarked?: BoolFieldUpdateOperationsInput | boolean
    count?: IntFieldUpdateOperationsInput | number
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    partSizes?: PartSizeUncheckedUpdateManyWithoutPartNestedInput
  }

  export type PartCreateManyInput = {
    id?: number
    label: string
    description?: string | null
    media_id: string
    sub_category_id: number
    is_bookmarked?: boolean
    count: number
    tags?: string | null
  }

  export type PartUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_bookmarked?: BoolFieldUpdateOperationsInput | boolean
    count?: IntFieldUpdateOperationsInput | number
    tags?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    media_id?: StringFieldUpdateOperationsInput | string
    sub_category_id?: IntFieldUpdateOperationsInput | number
    is_bookmarked?: BoolFieldUpdateOperationsInput | boolean
    count?: IntFieldUpdateOperationsInput | number
    tags?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PartSizeCreateInput = {
    code?: string
    price: number
    size: string
    width: string
    height: string
    thickness?: string | null
    RS1?: string | null
    RS2?: string | null
    design_file: Bytes
    is_bookmarked?: boolean
    meta: string
    part: PartCreateNestedOneWithoutPartSizesInput
  }

  export type PartSizeUncheckedCreateInput = {
    id?: number
    code?: string
    price: number
    size: string
    width: string
    height: string
    thickness?: string | null
    RS1?: string | null
    RS2?: string | null
    design_file: Bytes
    is_bookmarked?: boolean
    meta: string
    part_id: number
  }

  export type PartSizeUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    width?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    thickness?: NullableStringFieldUpdateOperationsInput | string | null
    RS1?: NullableStringFieldUpdateOperationsInput | string | null
    RS2?: NullableStringFieldUpdateOperationsInput | string | null
    design_file?: BytesFieldUpdateOperationsInput | Bytes
    is_bookmarked?: BoolFieldUpdateOperationsInput | boolean
    meta?: StringFieldUpdateOperationsInput | string
    part?: PartUpdateOneRequiredWithoutPartSizesNestedInput
  }

  export type PartSizeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    width?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    thickness?: NullableStringFieldUpdateOperationsInput | string | null
    RS1?: NullableStringFieldUpdateOperationsInput | string | null
    RS2?: NullableStringFieldUpdateOperationsInput | string | null
    design_file?: BytesFieldUpdateOperationsInput | Bytes
    is_bookmarked?: BoolFieldUpdateOperationsInput | boolean
    meta?: StringFieldUpdateOperationsInput | string
    part_id?: IntFieldUpdateOperationsInput | number
  }

  export type PartSizeCreateManyInput = {
    id?: number
    code?: string
    price: number
    size: string
    width: string
    height: string
    thickness?: string | null
    RS1?: string | null
    RS2?: string | null
    design_file: Bytes
    is_bookmarked?: boolean
    meta: string
    part_id: number
  }

  export type PartSizeUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    width?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    thickness?: NullableStringFieldUpdateOperationsInput | string | null
    RS1?: NullableStringFieldUpdateOperationsInput | string | null
    RS2?: NullableStringFieldUpdateOperationsInput | string | null
    design_file?: BytesFieldUpdateOperationsInput | Bytes
    is_bookmarked?: BoolFieldUpdateOperationsInput | boolean
    meta?: StringFieldUpdateOperationsInput | string
  }

  export type PartSizeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    width?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    thickness?: NullableStringFieldUpdateOperationsInput | string | null
    RS1?: NullableStringFieldUpdateOperationsInput | string | null
    RS2?: NullableStringFieldUpdateOperationsInput | string | null
    design_file?: BytesFieldUpdateOperationsInput | Bytes
    is_bookmarked?: BoolFieldUpdateOperationsInput | boolean
    meta?: StringFieldUpdateOperationsInput | string
    part_id?: IntFieldUpdateOperationsInput | number
  }

  export type MediaCreateInput = {
    id?: string
    image: Bytes
    type: string
    Category?: CategoryCreateNestedManyWithoutMediaInput
    SubCategory?: SubCategoryCreateNestedManyWithoutMediaInput
    Part?: PartCreateNestedManyWithoutMediaInput
  }

  export type MediaUncheckedCreateInput = {
    id?: string
    image: Bytes
    type: string
    Category?: CategoryUncheckedCreateNestedManyWithoutMediaInput
    SubCategory?: SubCategoryUncheckedCreateNestedManyWithoutMediaInput
    Part?: PartUncheckedCreateNestedManyWithoutMediaInput
  }

  export type MediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: BytesFieldUpdateOperationsInput | Bytes
    type?: StringFieldUpdateOperationsInput | string
    Category?: CategoryUpdateManyWithoutMediaNestedInput
    SubCategory?: SubCategoryUpdateManyWithoutMediaNestedInput
    Part?: PartUpdateManyWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: BytesFieldUpdateOperationsInput | Bytes
    type?: StringFieldUpdateOperationsInput | string
    Category?: CategoryUncheckedUpdateManyWithoutMediaNestedInput
    SubCategory?: SubCategoryUncheckedUpdateManyWithoutMediaNestedInput
    Part?: PartUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type MediaCreateManyInput = {
    id?: string
    image: Bytes
    type: string
  }

  export type MediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: BytesFieldUpdateOperationsInput | Bytes
    type?: StringFieldUpdateOperationsInput | string
  }

  export type MediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: BytesFieldUpdateOperationsInput | Bytes
    type?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MediaScalarRelationFilter = {
    is?: MediaWhereInput
    isNot?: MediaWhereInput
  }

  export type SubCategoryListRelationFilter = {
    every?: SubCategoryWhereInput
    some?: SubCategoryWhereInput
    none?: SubCategoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SubCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    description?: SortOrder
    media_id?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    description?: SortOrder
    media_id?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    description?: SortOrder
    media_id?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type PartListRelationFilter = {
    every?: PartWhereInput
    some?: PartWhereInput
    none?: PartWhereInput
  }

  export type SubCategoryNullableScalarRelationFilter = {
    is?: SubCategoryWhereInput | null
    isNot?: SubCategoryWhereInput | null
  }

  export type PartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    media_id?: SortOrder
    category_id?: SortOrder
    parent_id?: SortOrder
  }

  export type SubCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    parent_id?: SortOrder
  }

  export type SubCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    media_id?: SortOrder
    category_id?: SortOrder
    parent_id?: SortOrder
  }

  export type SubCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    media_id?: SortOrder
    category_id?: SortOrder
    parent_id?: SortOrder
  }

  export type SubCategorySumOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    parent_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SubCategoryScalarRelationFilter = {
    is?: SubCategoryWhereInput
    isNot?: SubCategoryWhereInput
  }

  export type PartSizeListRelationFilter = {
    every?: PartSizeWhereInput
    some?: PartSizeWhereInput
    none?: PartSizeWhereInput
  }

  export type PartSizeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PartCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    description?: SortOrder
    media_id?: SortOrder
    sub_category_id?: SortOrder
    is_bookmarked?: SortOrder
    count?: SortOrder
    tags?: SortOrder
  }

  export type PartAvgOrderByAggregateInput = {
    id?: SortOrder
    sub_category_id?: SortOrder
    count?: SortOrder
  }

  export type PartMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    description?: SortOrder
    media_id?: SortOrder
    sub_category_id?: SortOrder
    is_bookmarked?: SortOrder
    count?: SortOrder
    tags?: SortOrder
  }

  export type PartMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    description?: SortOrder
    media_id?: SortOrder
    sub_category_id?: SortOrder
    is_bookmarked?: SortOrder
    count?: SortOrder
    tags?: SortOrder
  }

  export type PartSumOrderByAggregateInput = {
    id?: SortOrder
    sub_category_id?: SortOrder
    count?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel>
    in?: Bytes[]
    notIn?: Bytes[]
    not?: NestedBytesFilter<$PrismaModel> | Bytes
  }

  export type PartScalarRelationFilter = {
    is?: PartWhereInput
    isNot?: PartWhereInput
  }

  export type PartSizeCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    price?: SortOrder
    size?: SortOrder
    width?: SortOrder
    height?: SortOrder
    thickness?: SortOrder
    RS1?: SortOrder
    RS2?: SortOrder
    design_file?: SortOrder
    is_bookmarked?: SortOrder
    meta?: SortOrder
    part_id?: SortOrder
  }

  export type PartSizeAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    part_id?: SortOrder
  }

  export type PartSizeMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    price?: SortOrder
    size?: SortOrder
    width?: SortOrder
    height?: SortOrder
    thickness?: SortOrder
    RS1?: SortOrder
    RS2?: SortOrder
    design_file?: SortOrder
    is_bookmarked?: SortOrder
    meta?: SortOrder
    part_id?: SortOrder
  }

  export type PartSizeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    price?: SortOrder
    size?: SortOrder
    width?: SortOrder
    height?: SortOrder
    thickness?: SortOrder
    RS1?: SortOrder
    RS2?: SortOrder
    design_file?: SortOrder
    is_bookmarked?: SortOrder
    meta?: SortOrder
    part_id?: SortOrder
  }

  export type PartSizeSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    part_id?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel>
    in?: Bytes[]
    notIn?: Bytes[]
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Bytes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MediaCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    type?: SortOrder
  }

  export type MediaMaxOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    type?: SortOrder
  }

  export type MediaMinOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    type?: SortOrder
  }

  export type MediaCreateNestedOneWithoutCategoryInput = {
    create?: XOR<MediaCreateWithoutCategoryInput, MediaUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: MediaCreateOrConnectWithoutCategoryInput
    connect?: MediaWhereUniqueInput
  }

  export type SubCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput> | SubCategoryCreateWithoutCategoryInput[] | SubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutCategoryInput | SubCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: SubCategoryCreateManyCategoryInputEnvelope
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
  }

  export type SubCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput> | SubCategoryCreateWithoutCategoryInput[] | SubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutCategoryInput | SubCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: SubCategoryCreateManyCategoryInputEnvelope
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MediaUpdateOneRequiredWithoutCategoryNestedInput = {
    create?: XOR<MediaCreateWithoutCategoryInput, MediaUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: MediaCreateOrConnectWithoutCategoryInput
    upsert?: MediaUpsertWithoutCategoryInput
    connect?: MediaWhereUniqueInput
    update?: XOR<XOR<MediaUpdateToOneWithWhereWithoutCategoryInput, MediaUpdateWithoutCategoryInput>, MediaUncheckedUpdateWithoutCategoryInput>
  }

  export type SubCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput> | SubCategoryCreateWithoutCategoryInput[] | SubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutCategoryInput | SubCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: SubCategoryUpsertWithWhereUniqueWithoutCategoryInput | SubCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SubCategoryCreateManyCategoryInputEnvelope
    set?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    disconnect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    delete?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    update?: SubCategoryUpdateWithWhereUniqueWithoutCategoryInput | SubCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SubCategoryUpdateManyWithWhereWithoutCategoryInput | SubCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput> | SubCategoryCreateWithoutCategoryInput[] | SubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutCategoryInput | SubCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: SubCategoryUpsertWithWhereUniqueWithoutCategoryInput | SubCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SubCategoryCreateManyCategoryInputEnvelope
    set?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    disconnect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    delete?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    update?: SubCategoryUpdateWithWhereUniqueWithoutCategoryInput | SubCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SubCategoryUpdateManyWithWhereWithoutCategoryInput | SubCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutSubCategoriesInput = {
    create?: XOR<CategoryCreateWithoutSubCategoriesInput, CategoryUncheckedCreateWithoutSubCategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubCategoriesInput
    connect?: CategoryWhereUniqueInput
  }

  export type MediaCreateNestedOneWithoutSubCategoryInput = {
    create?: XOR<MediaCreateWithoutSubCategoryInput, MediaUncheckedCreateWithoutSubCategoryInput>
    connectOrCreate?: MediaCreateOrConnectWithoutSubCategoryInput
    connect?: MediaWhereUniqueInput
  }

  export type PartCreateNestedManyWithoutSubCategoryInput = {
    create?: XOR<PartCreateWithoutSubCategoryInput, PartUncheckedCreateWithoutSubCategoryInput> | PartCreateWithoutSubCategoryInput[] | PartUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: PartCreateOrConnectWithoutSubCategoryInput | PartCreateOrConnectWithoutSubCategoryInput[]
    createMany?: PartCreateManySubCategoryInputEnvelope
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
  }

  export type SubCategoryCreateNestedOneWithoutChildrenInput = {
    create?: XOR<SubCategoryCreateWithoutChildrenInput, SubCategoryUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: SubCategoryCreateOrConnectWithoutChildrenInput
    connect?: SubCategoryWhereUniqueInput
  }

  export type SubCategoryCreateNestedManyWithoutParentInput = {
    create?: XOR<SubCategoryCreateWithoutParentInput, SubCategoryUncheckedCreateWithoutParentInput> | SubCategoryCreateWithoutParentInput[] | SubCategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutParentInput | SubCategoryCreateOrConnectWithoutParentInput[]
    createMany?: SubCategoryCreateManyParentInputEnvelope
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
  }

  export type PartUncheckedCreateNestedManyWithoutSubCategoryInput = {
    create?: XOR<PartCreateWithoutSubCategoryInput, PartUncheckedCreateWithoutSubCategoryInput> | PartCreateWithoutSubCategoryInput[] | PartUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: PartCreateOrConnectWithoutSubCategoryInput | PartCreateOrConnectWithoutSubCategoryInput[]
    createMany?: PartCreateManySubCategoryInputEnvelope
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
  }

  export type SubCategoryUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<SubCategoryCreateWithoutParentInput, SubCategoryUncheckedCreateWithoutParentInput> | SubCategoryCreateWithoutParentInput[] | SubCategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutParentInput | SubCategoryCreateOrConnectWithoutParentInput[]
    createMany?: SubCategoryCreateManyParentInputEnvelope
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
  }

  export type CategoryUpdateOneRequiredWithoutSubCategoriesNestedInput = {
    create?: XOR<CategoryCreateWithoutSubCategoriesInput, CategoryUncheckedCreateWithoutSubCategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubCategoriesInput
    upsert?: CategoryUpsertWithoutSubCategoriesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutSubCategoriesInput, CategoryUpdateWithoutSubCategoriesInput>, CategoryUncheckedUpdateWithoutSubCategoriesInput>
  }

  export type MediaUpdateOneRequiredWithoutSubCategoryNestedInput = {
    create?: XOR<MediaCreateWithoutSubCategoryInput, MediaUncheckedCreateWithoutSubCategoryInput>
    connectOrCreate?: MediaCreateOrConnectWithoutSubCategoryInput
    upsert?: MediaUpsertWithoutSubCategoryInput
    connect?: MediaWhereUniqueInput
    update?: XOR<XOR<MediaUpdateToOneWithWhereWithoutSubCategoryInput, MediaUpdateWithoutSubCategoryInput>, MediaUncheckedUpdateWithoutSubCategoryInput>
  }

  export type PartUpdateManyWithoutSubCategoryNestedInput = {
    create?: XOR<PartCreateWithoutSubCategoryInput, PartUncheckedCreateWithoutSubCategoryInput> | PartCreateWithoutSubCategoryInput[] | PartUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: PartCreateOrConnectWithoutSubCategoryInput | PartCreateOrConnectWithoutSubCategoryInput[]
    upsert?: PartUpsertWithWhereUniqueWithoutSubCategoryInput | PartUpsertWithWhereUniqueWithoutSubCategoryInput[]
    createMany?: PartCreateManySubCategoryInputEnvelope
    set?: PartWhereUniqueInput | PartWhereUniqueInput[]
    disconnect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    delete?: PartWhereUniqueInput | PartWhereUniqueInput[]
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    update?: PartUpdateWithWhereUniqueWithoutSubCategoryInput | PartUpdateWithWhereUniqueWithoutSubCategoryInput[]
    updateMany?: PartUpdateManyWithWhereWithoutSubCategoryInput | PartUpdateManyWithWhereWithoutSubCategoryInput[]
    deleteMany?: PartScalarWhereInput | PartScalarWhereInput[]
  }

  export type SubCategoryUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<SubCategoryCreateWithoutChildrenInput, SubCategoryUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: SubCategoryCreateOrConnectWithoutChildrenInput
    upsert?: SubCategoryUpsertWithoutChildrenInput
    disconnect?: SubCategoryWhereInput | boolean
    delete?: SubCategoryWhereInput | boolean
    connect?: SubCategoryWhereUniqueInput
    update?: XOR<XOR<SubCategoryUpdateToOneWithWhereWithoutChildrenInput, SubCategoryUpdateWithoutChildrenInput>, SubCategoryUncheckedUpdateWithoutChildrenInput>
  }

  export type SubCategoryUpdateManyWithoutParentNestedInput = {
    create?: XOR<SubCategoryCreateWithoutParentInput, SubCategoryUncheckedCreateWithoutParentInput> | SubCategoryCreateWithoutParentInput[] | SubCategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutParentInput | SubCategoryCreateOrConnectWithoutParentInput[]
    upsert?: SubCategoryUpsertWithWhereUniqueWithoutParentInput | SubCategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: SubCategoryCreateManyParentInputEnvelope
    set?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    disconnect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    delete?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    update?: SubCategoryUpdateWithWhereUniqueWithoutParentInput | SubCategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: SubCategoryUpdateManyWithWhereWithoutParentInput | SubCategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PartUncheckedUpdateManyWithoutSubCategoryNestedInput = {
    create?: XOR<PartCreateWithoutSubCategoryInput, PartUncheckedCreateWithoutSubCategoryInput> | PartCreateWithoutSubCategoryInput[] | PartUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: PartCreateOrConnectWithoutSubCategoryInput | PartCreateOrConnectWithoutSubCategoryInput[]
    upsert?: PartUpsertWithWhereUniqueWithoutSubCategoryInput | PartUpsertWithWhereUniqueWithoutSubCategoryInput[]
    createMany?: PartCreateManySubCategoryInputEnvelope
    set?: PartWhereUniqueInput | PartWhereUniqueInput[]
    disconnect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    delete?: PartWhereUniqueInput | PartWhereUniqueInput[]
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    update?: PartUpdateWithWhereUniqueWithoutSubCategoryInput | PartUpdateWithWhereUniqueWithoutSubCategoryInput[]
    updateMany?: PartUpdateManyWithWhereWithoutSubCategoryInput | PartUpdateManyWithWhereWithoutSubCategoryInput[]
    deleteMany?: PartScalarWhereInput | PartScalarWhereInput[]
  }

  export type SubCategoryUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<SubCategoryCreateWithoutParentInput, SubCategoryUncheckedCreateWithoutParentInput> | SubCategoryCreateWithoutParentInput[] | SubCategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutParentInput | SubCategoryCreateOrConnectWithoutParentInput[]
    upsert?: SubCategoryUpsertWithWhereUniqueWithoutParentInput | SubCategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: SubCategoryCreateManyParentInputEnvelope
    set?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    disconnect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    delete?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    update?: SubCategoryUpdateWithWhereUniqueWithoutParentInput | SubCategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: SubCategoryUpdateManyWithWhereWithoutParentInput | SubCategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
  }

  export type MediaCreateNestedOneWithoutPartInput = {
    create?: XOR<MediaCreateWithoutPartInput, MediaUncheckedCreateWithoutPartInput>
    connectOrCreate?: MediaCreateOrConnectWithoutPartInput
    connect?: MediaWhereUniqueInput
  }

  export type SubCategoryCreateNestedOneWithoutPartsInput = {
    create?: XOR<SubCategoryCreateWithoutPartsInput, SubCategoryUncheckedCreateWithoutPartsInput>
    connectOrCreate?: SubCategoryCreateOrConnectWithoutPartsInput
    connect?: SubCategoryWhereUniqueInput
  }

  export type PartSizeCreateNestedManyWithoutPartInput = {
    create?: XOR<PartSizeCreateWithoutPartInput, PartSizeUncheckedCreateWithoutPartInput> | PartSizeCreateWithoutPartInput[] | PartSizeUncheckedCreateWithoutPartInput[]
    connectOrCreate?: PartSizeCreateOrConnectWithoutPartInput | PartSizeCreateOrConnectWithoutPartInput[]
    createMany?: PartSizeCreateManyPartInputEnvelope
    connect?: PartSizeWhereUniqueInput | PartSizeWhereUniqueInput[]
  }

  export type PartSizeUncheckedCreateNestedManyWithoutPartInput = {
    create?: XOR<PartSizeCreateWithoutPartInput, PartSizeUncheckedCreateWithoutPartInput> | PartSizeCreateWithoutPartInput[] | PartSizeUncheckedCreateWithoutPartInput[]
    connectOrCreate?: PartSizeCreateOrConnectWithoutPartInput | PartSizeCreateOrConnectWithoutPartInput[]
    createMany?: PartSizeCreateManyPartInputEnvelope
    connect?: PartSizeWhereUniqueInput | PartSizeWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type MediaUpdateOneRequiredWithoutPartNestedInput = {
    create?: XOR<MediaCreateWithoutPartInput, MediaUncheckedCreateWithoutPartInput>
    connectOrCreate?: MediaCreateOrConnectWithoutPartInput
    upsert?: MediaUpsertWithoutPartInput
    connect?: MediaWhereUniqueInput
    update?: XOR<XOR<MediaUpdateToOneWithWhereWithoutPartInput, MediaUpdateWithoutPartInput>, MediaUncheckedUpdateWithoutPartInput>
  }

  export type SubCategoryUpdateOneRequiredWithoutPartsNestedInput = {
    create?: XOR<SubCategoryCreateWithoutPartsInput, SubCategoryUncheckedCreateWithoutPartsInput>
    connectOrCreate?: SubCategoryCreateOrConnectWithoutPartsInput
    upsert?: SubCategoryUpsertWithoutPartsInput
    connect?: SubCategoryWhereUniqueInput
    update?: XOR<XOR<SubCategoryUpdateToOneWithWhereWithoutPartsInput, SubCategoryUpdateWithoutPartsInput>, SubCategoryUncheckedUpdateWithoutPartsInput>
  }

  export type PartSizeUpdateManyWithoutPartNestedInput = {
    create?: XOR<PartSizeCreateWithoutPartInput, PartSizeUncheckedCreateWithoutPartInput> | PartSizeCreateWithoutPartInput[] | PartSizeUncheckedCreateWithoutPartInput[]
    connectOrCreate?: PartSizeCreateOrConnectWithoutPartInput | PartSizeCreateOrConnectWithoutPartInput[]
    upsert?: PartSizeUpsertWithWhereUniqueWithoutPartInput | PartSizeUpsertWithWhereUniqueWithoutPartInput[]
    createMany?: PartSizeCreateManyPartInputEnvelope
    set?: PartSizeWhereUniqueInput | PartSizeWhereUniqueInput[]
    disconnect?: PartSizeWhereUniqueInput | PartSizeWhereUniqueInput[]
    delete?: PartSizeWhereUniqueInput | PartSizeWhereUniqueInput[]
    connect?: PartSizeWhereUniqueInput | PartSizeWhereUniqueInput[]
    update?: PartSizeUpdateWithWhereUniqueWithoutPartInput | PartSizeUpdateWithWhereUniqueWithoutPartInput[]
    updateMany?: PartSizeUpdateManyWithWhereWithoutPartInput | PartSizeUpdateManyWithWhereWithoutPartInput[]
    deleteMany?: PartSizeScalarWhereInput | PartSizeScalarWhereInput[]
  }

  export type PartSizeUncheckedUpdateManyWithoutPartNestedInput = {
    create?: XOR<PartSizeCreateWithoutPartInput, PartSizeUncheckedCreateWithoutPartInput> | PartSizeCreateWithoutPartInput[] | PartSizeUncheckedCreateWithoutPartInput[]
    connectOrCreate?: PartSizeCreateOrConnectWithoutPartInput | PartSizeCreateOrConnectWithoutPartInput[]
    upsert?: PartSizeUpsertWithWhereUniqueWithoutPartInput | PartSizeUpsertWithWhereUniqueWithoutPartInput[]
    createMany?: PartSizeCreateManyPartInputEnvelope
    set?: PartSizeWhereUniqueInput | PartSizeWhereUniqueInput[]
    disconnect?: PartSizeWhereUniqueInput | PartSizeWhereUniqueInput[]
    delete?: PartSizeWhereUniqueInput | PartSizeWhereUniqueInput[]
    connect?: PartSizeWhereUniqueInput | PartSizeWhereUniqueInput[]
    update?: PartSizeUpdateWithWhereUniqueWithoutPartInput | PartSizeUpdateWithWhereUniqueWithoutPartInput[]
    updateMany?: PartSizeUpdateManyWithWhereWithoutPartInput | PartSizeUpdateManyWithWhereWithoutPartInput[]
    deleteMany?: PartSizeScalarWhereInput | PartSizeScalarWhereInput[]
  }

  export type PartCreateNestedOneWithoutPartSizesInput = {
    create?: XOR<PartCreateWithoutPartSizesInput, PartUncheckedCreateWithoutPartSizesInput>
    connectOrCreate?: PartCreateOrConnectWithoutPartSizesInput
    connect?: PartWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Bytes
  }

  export type PartUpdateOneRequiredWithoutPartSizesNestedInput = {
    create?: XOR<PartCreateWithoutPartSizesInput, PartUncheckedCreateWithoutPartSizesInput>
    connectOrCreate?: PartCreateOrConnectWithoutPartSizesInput
    upsert?: PartUpsertWithoutPartSizesInput
    connect?: PartWhereUniqueInput
    update?: XOR<XOR<PartUpdateToOneWithWhereWithoutPartSizesInput, PartUpdateWithoutPartSizesInput>, PartUncheckedUpdateWithoutPartSizesInput>
  }

  export type CategoryCreateNestedManyWithoutMediaInput = {
    create?: XOR<CategoryCreateWithoutMediaInput, CategoryUncheckedCreateWithoutMediaInput> | CategoryCreateWithoutMediaInput[] | CategoryUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutMediaInput | CategoryCreateOrConnectWithoutMediaInput[]
    createMany?: CategoryCreateManyMediaInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type SubCategoryCreateNestedManyWithoutMediaInput = {
    create?: XOR<SubCategoryCreateWithoutMediaInput, SubCategoryUncheckedCreateWithoutMediaInput> | SubCategoryCreateWithoutMediaInput[] | SubCategoryUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutMediaInput | SubCategoryCreateOrConnectWithoutMediaInput[]
    createMany?: SubCategoryCreateManyMediaInputEnvelope
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
  }

  export type PartCreateNestedManyWithoutMediaInput = {
    create?: XOR<PartCreateWithoutMediaInput, PartUncheckedCreateWithoutMediaInput> | PartCreateWithoutMediaInput[] | PartUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: PartCreateOrConnectWithoutMediaInput | PartCreateOrConnectWithoutMediaInput[]
    createMany?: PartCreateManyMediaInputEnvelope
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutMediaInput = {
    create?: XOR<CategoryCreateWithoutMediaInput, CategoryUncheckedCreateWithoutMediaInput> | CategoryCreateWithoutMediaInput[] | CategoryUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutMediaInput | CategoryCreateOrConnectWithoutMediaInput[]
    createMany?: CategoryCreateManyMediaInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type SubCategoryUncheckedCreateNestedManyWithoutMediaInput = {
    create?: XOR<SubCategoryCreateWithoutMediaInput, SubCategoryUncheckedCreateWithoutMediaInput> | SubCategoryCreateWithoutMediaInput[] | SubCategoryUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutMediaInput | SubCategoryCreateOrConnectWithoutMediaInput[]
    createMany?: SubCategoryCreateManyMediaInputEnvelope
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
  }

  export type PartUncheckedCreateNestedManyWithoutMediaInput = {
    create?: XOR<PartCreateWithoutMediaInput, PartUncheckedCreateWithoutMediaInput> | PartCreateWithoutMediaInput[] | PartUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: PartCreateOrConnectWithoutMediaInput | PartCreateOrConnectWithoutMediaInput[]
    createMany?: PartCreateManyMediaInputEnvelope
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
  }

  export type CategoryUpdateManyWithoutMediaNestedInput = {
    create?: XOR<CategoryCreateWithoutMediaInput, CategoryUncheckedCreateWithoutMediaInput> | CategoryCreateWithoutMediaInput[] | CategoryUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutMediaInput | CategoryCreateOrConnectWithoutMediaInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutMediaInput | CategoryUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: CategoryCreateManyMediaInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutMediaInput | CategoryUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutMediaInput | CategoryUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type SubCategoryUpdateManyWithoutMediaNestedInput = {
    create?: XOR<SubCategoryCreateWithoutMediaInput, SubCategoryUncheckedCreateWithoutMediaInput> | SubCategoryCreateWithoutMediaInput[] | SubCategoryUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutMediaInput | SubCategoryCreateOrConnectWithoutMediaInput[]
    upsert?: SubCategoryUpsertWithWhereUniqueWithoutMediaInput | SubCategoryUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: SubCategoryCreateManyMediaInputEnvelope
    set?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    disconnect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    delete?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    update?: SubCategoryUpdateWithWhereUniqueWithoutMediaInput | SubCategoryUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: SubCategoryUpdateManyWithWhereWithoutMediaInput | SubCategoryUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
  }

  export type PartUpdateManyWithoutMediaNestedInput = {
    create?: XOR<PartCreateWithoutMediaInput, PartUncheckedCreateWithoutMediaInput> | PartCreateWithoutMediaInput[] | PartUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: PartCreateOrConnectWithoutMediaInput | PartCreateOrConnectWithoutMediaInput[]
    upsert?: PartUpsertWithWhereUniqueWithoutMediaInput | PartUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: PartCreateManyMediaInputEnvelope
    set?: PartWhereUniqueInput | PartWhereUniqueInput[]
    disconnect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    delete?: PartWhereUniqueInput | PartWhereUniqueInput[]
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    update?: PartUpdateWithWhereUniqueWithoutMediaInput | PartUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: PartUpdateManyWithWhereWithoutMediaInput | PartUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: PartScalarWhereInput | PartScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutMediaNestedInput = {
    create?: XOR<CategoryCreateWithoutMediaInput, CategoryUncheckedCreateWithoutMediaInput> | CategoryCreateWithoutMediaInput[] | CategoryUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutMediaInput | CategoryCreateOrConnectWithoutMediaInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutMediaInput | CategoryUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: CategoryCreateManyMediaInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutMediaInput | CategoryUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutMediaInput | CategoryUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type SubCategoryUncheckedUpdateManyWithoutMediaNestedInput = {
    create?: XOR<SubCategoryCreateWithoutMediaInput, SubCategoryUncheckedCreateWithoutMediaInput> | SubCategoryCreateWithoutMediaInput[] | SubCategoryUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutMediaInput | SubCategoryCreateOrConnectWithoutMediaInput[]
    upsert?: SubCategoryUpsertWithWhereUniqueWithoutMediaInput | SubCategoryUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: SubCategoryCreateManyMediaInputEnvelope
    set?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    disconnect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    delete?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    update?: SubCategoryUpdateWithWhereUniqueWithoutMediaInput | SubCategoryUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: SubCategoryUpdateManyWithWhereWithoutMediaInput | SubCategoryUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
  }

  export type PartUncheckedUpdateManyWithoutMediaNestedInput = {
    create?: XOR<PartCreateWithoutMediaInput, PartUncheckedCreateWithoutMediaInput> | PartCreateWithoutMediaInput[] | PartUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: PartCreateOrConnectWithoutMediaInput | PartCreateOrConnectWithoutMediaInput[]
    upsert?: PartUpsertWithWhereUniqueWithoutMediaInput | PartUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: PartCreateManyMediaInputEnvelope
    set?: PartWhereUniqueInput | PartWhereUniqueInput[]
    disconnect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    delete?: PartWhereUniqueInput | PartWhereUniqueInput[]
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    update?: PartUpdateWithWhereUniqueWithoutMediaInput | PartUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: PartUpdateManyWithWhereWithoutMediaInput | PartUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: PartScalarWhereInput | PartScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel>
    in?: Bytes[]
    notIn?: Bytes[]
    not?: NestedBytesFilter<$PrismaModel> | Bytes
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel>
    in?: Bytes[]
    notIn?: Bytes[]
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Bytes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type MediaCreateWithoutCategoryInput = {
    id?: string
    image: Bytes
    type: string
    SubCategory?: SubCategoryCreateNestedManyWithoutMediaInput
    Part?: PartCreateNestedManyWithoutMediaInput
  }

  export type MediaUncheckedCreateWithoutCategoryInput = {
    id?: string
    image: Bytes
    type: string
    SubCategory?: SubCategoryUncheckedCreateNestedManyWithoutMediaInput
    Part?: PartUncheckedCreateNestedManyWithoutMediaInput
  }

  export type MediaCreateOrConnectWithoutCategoryInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutCategoryInput, MediaUncheckedCreateWithoutCategoryInput>
  }

  export type SubCategoryCreateWithoutCategoryInput = {
    label: string
    media: MediaCreateNestedOneWithoutSubCategoryInput
    parts?: PartCreateNestedManyWithoutSubCategoryInput
    parent?: SubCategoryCreateNestedOneWithoutChildrenInput
    children?: SubCategoryCreateNestedManyWithoutParentInput
  }

  export type SubCategoryUncheckedCreateWithoutCategoryInput = {
    id?: number
    label: string
    media_id: string
    parent_id?: number | null
    parts?: PartUncheckedCreateNestedManyWithoutSubCategoryInput
    children?: SubCategoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type SubCategoryCreateOrConnectWithoutCategoryInput = {
    where: SubCategoryWhereUniqueInput
    create: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type SubCategoryCreateManyCategoryInputEnvelope = {
    data: SubCategoryCreateManyCategoryInput | SubCategoryCreateManyCategoryInput[]
  }

  export type MediaUpsertWithoutCategoryInput = {
    update: XOR<MediaUpdateWithoutCategoryInput, MediaUncheckedUpdateWithoutCategoryInput>
    create: XOR<MediaCreateWithoutCategoryInput, MediaUncheckedCreateWithoutCategoryInput>
    where?: MediaWhereInput
  }

  export type MediaUpdateToOneWithWhereWithoutCategoryInput = {
    where?: MediaWhereInput
    data: XOR<MediaUpdateWithoutCategoryInput, MediaUncheckedUpdateWithoutCategoryInput>
  }

  export type MediaUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: BytesFieldUpdateOperationsInput | Bytes
    type?: StringFieldUpdateOperationsInput | string
    SubCategory?: SubCategoryUpdateManyWithoutMediaNestedInput
    Part?: PartUpdateManyWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: BytesFieldUpdateOperationsInput | Bytes
    type?: StringFieldUpdateOperationsInput | string
    SubCategory?: SubCategoryUncheckedUpdateManyWithoutMediaNestedInput
    Part?: PartUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type SubCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: SubCategoryWhereUniqueInput
    update: XOR<SubCategoryUpdateWithoutCategoryInput, SubCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type SubCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: SubCategoryWhereUniqueInput
    data: XOR<SubCategoryUpdateWithoutCategoryInput, SubCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type SubCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: SubCategoryScalarWhereInput
    data: XOR<SubCategoryUpdateManyMutationInput, SubCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type SubCategoryScalarWhereInput = {
    AND?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
    OR?: SubCategoryScalarWhereInput[]
    NOT?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
    id?: IntFilter<"SubCategory"> | number
    label?: StringFilter<"SubCategory"> | string
    media_id?: StringFilter<"SubCategory"> | string
    category_id?: IntFilter<"SubCategory"> | number
    parent_id?: IntNullableFilter<"SubCategory"> | number | null
  }

  export type CategoryCreateWithoutSubCategoriesInput = {
    label: string
    description?: string | null
    media: MediaCreateNestedOneWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutSubCategoriesInput = {
    id?: number
    label: string
    description?: string | null
    media_id: string
  }

  export type CategoryCreateOrConnectWithoutSubCategoriesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutSubCategoriesInput, CategoryUncheckedCreateWithoutSubCategoriesInput>
  }

  export type MediaCreateWithoutSubCategoryInput = {
    id?: string
    image: Bytes
    type: string
    Category?: CategoryCreateNestedManyWithoutMediaInput
    Part?: PartCreateNestedManyWithoutMediaInput
  }

  export type MediaUncheckedCreateWithoutSubCategoryInput = {
    id?: string
    image: Bytes
    type: string
    Category?: CategoryUncheckedCreateNestedManyWithoutMediaInput
    Part?: PartUncheckedCreateNestedManyWithoutMediaInput
  }

  export type MediaCreateOrConnectWithoutSubCategoryInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutSubCategoryInput, MediaUncheckedCreateWithoutSubCategoryInput>
  }

  export type PartCreateWithoutSubCategoryInput = {
    label: string
    description?: string | null
    is_bookmarked?: boolean
    count: number
    tags?: string | null
    media: MediaCreateNestedOneWithoutPartInput
    partSizes?: PartSizeCreateNestedManyWithoutPartInput
  }

  export type PartUncheckedCreateWithoutSubCategoryInput = {
    id?: number
    label: string
    description?: string | null
    media_id: string
    is_bookmarked?: boolean
    count: number
    tags?: string | null
    partSizes?: PartSizeUncheckedCreateNestedManyWithoutPartInput
  }

  export type PartCreateOrConnectWithoutSubCategoryInput = {
    where: PartWhereUniqueInput
    create: XOR<PartCreateWithoutSubCategoryInput, PartUncheckedCreateWithoutSubCategoryInput>
  }

  export type PartCreateManySubCategoryInputEnvelope = {
    data: PartCreateManySubCategoryInput | PartCreateManySubCategoryInput[]
  }

  export type SubCategoryCreateWithoutChildrenInput = {
    label: string
    category: CategoryCreateNestedOneWithoutSubCategoriesInput
    media: MediaCreateNestedOneWithoutSubCategoryInput
    parts?: PartCreateNestedManyWithoutSubCategoryInput
    parent?: SubCategoryCreateNestedOneWithoutChildrenInput
  }

  export type SubCategoryUncheckedCreateWithoutChildrenInput = {
    id?: number
    label: string
    media_id: string
    category_id: number
    parent_id?: number | null
    parts?: PartUncheckedCreateNestedManyWithoutSubCategoryInput
  }

  export type SubCategoryCreateOrConnectWithoutChildrenInput = {
    where: SubCategoryWhereUniqueInput
    create: XOR<SubCategoryCreateWithoutChildrenInput, SubCategoryUncheckedCreateWithoutChildrenInput>
  }

  export type SubCategoryCreateWithoutParentInput = {
    label: string
    category: CategoryCreateNestedOneWithoutSubCategoriesInput
    media: MediaCreateNestedOneWithoutSubCategoryInput
    parts?: PartCreateNestedManyWithoutSubCategoryInput
    children?: SubCategoryCreateNestedManyWithoutParentInput
  }

  export type SubCategoryUncheckedCreateWithoutParentInput = {
    id?: number
    label: string
    media_id: string
    category_id: number
    parts?: PartUncheckedCreateNestedManyWithoutSubCategoryInput
    children?: SubCategoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type SubCategoryCreateOrConnectWithoutParentInput = {
    where: SubCategoryWhereUniqueInput
    create: XOR<SubCategoryCreateWithoutParentInput, SubCategoryUncheckedCreateWithoutParentInput>
  }

  export type SubCategoryCreateManyParentInputEnvelope = {
    data: SubCategoryCreateManyParentInput | SubCategoryCreateManyParentInput[]
  }

  export type CategoryUpsertWithoutSubCategoriesInput = {
    update: XOR<CategoryUpdateWithoutSubCategoriesInput, CategoryUncheckedUpdateWithoutSubCategoriesInput>
    create: XOR<CategoryCreateWithoutSubCategoriesInput, CategoryUncheckedCreateWithoutSubCategoriesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutSubCategoriesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutSubCategoriesInput, CategoryUncheckedUpdateWithoutSubCategoriesInput>
  }

  export type CategoryUpdateWithoutSubCategoriesInput = {
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    media?: MediaUpdateOneRequiredWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutSubCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    media_id?: StringFieldUpdateOperationsInput | string
  }

  export type MediaUpsertWithoutSubCategoryInput = {
    update: XOR<MediaUpdateWithoutSubCategoryInput, MediaUncheckedUpdateWithoutSubCategoryInput>
    create: XOR<MediaCreateWithoutSubCategoryInput, MediaUncheckedCreateWithoutSubCategoryInput>
    where?: MediaWhereInput
  }

  export type MediaUpdateToOneWithWhereWithoutSubCategoryInput = {
    where?: MediaWhereInput
    data: XOR<MediaUpdateWithoutSubCategoryInput, MediaUncheckedUpdateWithoutSubCategoryInput>
  }

  export type MediaUpdateWithoutSubCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: BytesFieldUpdateOperationsInput | Bytes
    type?: StringFieldUpdateOperationsInput | string
    Category?: CategoryUpdateManyWithoutMediaNestedInput
    Part?: PartUpdateManyWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateWithoutSubCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: BytesFieldUpdateOperationsInput | Bytes
    type?: StringFieldUpdateOperationsInput | string
    Category?: CategoryUncheckedUpdateManyWithoutMediaNestedInput
    Part?: PartUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type PartUpsertWithWhereUniqueWithoutSubCategoryInput = {
    where: PartWhereUniqueInput
    update: XOR<PartUpdateWithoutSubCategoryInput, PartUncheckedUpdateWithoutSubCategoryInput>
    create: XOR<PartCreateWithoutSubCategoryInput, PartUncheckedCreateWithoutSubCategoryInput>
  }

  export type PartUpdateWithWhereUniqueWithoutSubCategoryInput = {
    where: PartWhereUniqueInput
    data: XOR<PartUpdateWithoutSubCategoryInput, PartUncheckedUpdateWithoutSubCategoryInput>
  }

  export type PartUpdateManyWithWhereWithoutSubCategoryInput = {
    where: PartScalarWhereInput
    data: XOR<PartUpdateManyMutationInput, PartUncheckedUpdateManyWithoutSubCategoryInput>
  }

  export type PartScalarWhereInput = {
    AND?: PartScalarWhereInput | PartScalarWhereInput[]
    OR?: PartScalarWhereInput[]
    NOT?: PartScalarWhereInput | PartScalarWhereInput[]
    id?: IntFilter<"Part"> | number
    label?: StringFilter<"Part"> | string
    description?: StringNullableFilter<"Part"> | string | null
    media_id?: StringFilter<"Part"> | string
    sub_category_id?: IntFilter<"Part"> | number
    is_bookmarked?: BoolFilter<"Part"> | boolean
    count?: IntFilter<"Part"> | number
    tags?: StringNullableFilter<"Part"> | string | null
  }

  export type SubCategoryUpsertWithoutChildrenInput = {
    update: XOR<SubCategoryUpdateWithoutChildrenInput, SubCategoryUncheckedUpdateWithoutChildrenInput>
    create: XOR<SubCategoryCreateWithoutChildrenInput, SubCategoryUncheckedCreateWithoutChildrenInput>
    where?: SubCategoryWhereInput
  }

  export type SubCategoryUpdateToOneWithWhereWithoutChildrenInput = {
    where?: SubCategoryWhereInput
    data: XOR<SubCategoryUpdateWithoutChildrenInput, SubCategoryUncheckedUpdateWithoutChildrenInput>
  }

  export type SubCategoryUpdateWithoutChildrenInput = {
    label?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutSubCategoriesNestedInput
    media?: MediaUpdateOneRequiredWithoutSubCategoryNestedInput
    parts?: PartUpdateManyWithoutSubCategoryNestedInput
    parent?: SubCategoryUpdateOneWithoutChildrenNestedInput
  }

  export type SubCategoryUncheckedUpdateWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    media_id?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    parts?: PartUncheckedUpdateManyWithoutSubCategoryNestedInput
  }

  export type SubCategoryUpsertWithWhereUniqueWithoutParentInput = {
    where: SubCategoryWhereUniqueInput
    update: XOR<SubCategoryUpdateWithoutParentInput, SubCategoryUncheckedUpdateWithoutParentInput>
    create: XOR<SubCategoryCreateWithoutParentInput, SubCategoryUncheckedCreateWithoutParentInput>
  }

  export type SubCategoryUpdateWithWhereUniqueWithoutParentInput = {
    where: SubCategoryWhereUniqueInput
    data: XOR<SubCategoryUpdateWithoutParentInput, SubCategoryUncheckedUpdateWithoutParentInput>
  }

  export type SubCategoryUpdateManyWithWhereWithoutParentInput = {
    where: SubCategoryScalarWhereInput
    data: XOR<SubCategoryUpdateManyMutationInput, SubCategoryUncheckedUpdateManyWithoutParentInput>
  }

  export type MediaCreateWithoutPartInput = {
    id?: string
    image: Bytes
    type: string
    Category?: CategoryCreateNestedManyWithoutMediaInput
    SubCategory?: SubCategoryCreateNestedManyWithoutMediaInput
  }

  export type MediaUncheckedCreateWithoutPartInput = {
    id?: string
    image: Bytes
    type: string
    Category?: CategoryUncheckedCreateNestedManyWithoutMediaInput
    SubCategory?: SubCategoryUncheckedCreateNestedManyWithoutMediaInput
  }

  export type MediaCreateOrConnectWithoutPartInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutPartInput, MediaUncheckedCreateWithoutPartInput>
  }

  export type SubCategoryCreateWithoutPartsInput = {
    label: string
    category: CategoryCreateNestedOneWithoutSubCategoriesInput
    media: MediaCreateNestedOneWithoutSubCategoryInput
    parent?: SubCategoryCreateNestedOneWithoutChildrenInput
    children?: SubCategoryCreateNestedManyWithoutParentInput
  }

  export type SubCategoryUncheckedCreateWithoutPartsInput = {
    id?: number
    label: string
    media_id: string
    category_id: number
    parent_id?: number | null
    children?: SubCategoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type SubCategoryCreateOrConnectWithoutPartsInput = {
    where: SubCategoryWhereUniqueInput
    create: XOR<SubCategoryCreateWithoutPartsInput, SubCategoryUncheckedCreateWithoutPartsInput>
  }

  export type PartSizeCreateWithoutPartInput = {
    code?: string
    price: number
    size: string
    width: string
    height: string
    thickness?: string | null
    RS1?: string | null
    RS2?: string | null
    design_file: Bytes
    is_bookmarked?: boolean
    meta: string
  }

  export type PartSizeUncheckedCreateWithoutPartInput = {
    id?: number
    code?: string
    price: number
    size: string
    width: string
    height: string
    thickness?: string | null
    RS1?: string | null
    RS2?: string | null
    design_file: Bytes
    is_bookmarked?: boolean
    meta: string
  }

  export type PartSizeCreateOrConnectWithoutPartInput = {
    where: PartSizeWhereUniqueInput
    create: XOR<PartSizeCreateWithoutPartInput, PartSizeUncheckedCreateWithoutPartInput>
  }

  export type PartSizeCreateManyPartInputEnvelope = {
    data: PartSizeCreateManyPartInput | PartSizeCreateManyPartInput[]
  }

  export type MediaUpsertWithoutPartInput = {
    update: XOR<MediaUpdateWithoutPartInput, MediaUncheckedUpdateWithoutPartInput>
    create: XOR<MediaCreateWithoutPartInput, MediaUncheckedCreateWithoutPartInput>
    where?: MediaWhereInput
  }

  export type MediaUpdateToOneWithWhereWithoutPartInput = {
    where?: MediaWhereInput
    data: XOR<MediaUpdateWithoutPartInput, MediaUncheckedUpdateWithoutPartInput>
  }

  export type MediaUpdateWithoutPartInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: BytesFieldUpdateOperationsInput | Bytes
    type?: StringFieldUpdateOperationsInput | string
    Category?: CategoryUpdateManyWithoutMediaNestedInput
    SubCategory?: SubCategoryUpdateManyWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateWithoutPartInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: BytesFieldUpdateOperationsInput | Bytes
    type?: StringFieldUpdateOperationsInput | string
    Category?: CategoryUncheckedUpdateManyWithoutMediaNestedInput
    SubCategory?: SubCategoryUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type SubCategoryUpsertWithoutPartsInput = {
    update: XOR<SubCategoryUpdateWithoutPartsInput, SubCategoryUncheckedUpdateWithoutPartsInput>
    create: XOR<SubCategoryCreateWithoutPartsInput, SubCategoryUncheckedCreateWithoutPartsInput>
    where?: SubCategoryWhereInput
  }

  export type SubCategoryUpdateToOneWithWhereWithoutPartsInput = {
    where?: SubCategoryWhereInput
    data: XOR<SubCategoryUpdateWithoutPartsInput, SubCategoryUncheckedUpdateWithoutPartsInput>
  }

  export type SubCategoryUpdateWithoutPartsInput = {
    label?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutSubCategoriesNestedInput
    media?: MediaUpdateOneRequiredWithoutSubCategoryNestedInput
    parent?: SubCategoryUpdateOneWithoutChildrenNestedInput
    children?: SubCategoryUpdateManyWithoutParentNestedInput
  }

  export type SubCategoryUncheckedUpdateWithoutPartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    media_id?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    children?: SubCategoryUncheckedUpdateManyWithoutParentNestedInput
  }

  export type PartSizeUpsertWithWhereUniqueWithoutPartInput = {
    where: PartSizeWhereUniqueInput
    update: XOR<PartSizeUpdateWithoutPartInput, PartSizeUncheckedUpdateWithoutPartInput>
    create: XOR<PartSizeCreateWithoutPartInput, PartSizeUncheckedCreateWithoutPartInput>
  }

  export type PartSizeUpdateWithWhereUniqueWithoutPartInput = {
    where: PartSizeWhereUniqueInput
    data: XOR<PartSizeUpdateWithoutPartInput, PartSizeUncheckedUpdateWithoutPartInput>
  }

  export type PartSizeUpdateManyWithWhereWithoutPartInput = {
    where: PartSizeScalarWhereInput
    data: XOR<PartSizeUpdateManyMutationInput, PartSizeUncheckedUpdateManyWithoutPartInput>
  }

  export type PartSizeScalarWhereInput = {
    AND?: PartSizeScalarWhereInput | PartSizeScalarWhereInput[]
    OR?: PartSizeScalarWhereInput[]
    NOT?: PartSizeScalarWhereInput | PartSizeScalarWhereInput[]
    id?: IntFilter<"PartSize"> | number
    code?: StringFilter<"PartSize"> | string
    price?: FloatFilter<"PartSize"> | number
    size?: StringFilter<"PartSize"> | string
    width?: StringFilter<"PartSize"> | string
    height?: StringFilter<"PartSize"> | string
    thickness?: StringNullableFilter<"PartSize"> | string | null
    RS1?: StringNullableFilter<"PartSize"> | string | null
    RS2?: StringNullableFilter<"PartSize"> | string | null
    design_file?: BytesFilter<"PartSize"> | Bytes
    is_bookmarked?: BoolFilter<"PartSize"> | boolean
    meta?: StringFilter<"PartSize"> | string
    part_id?: IntFilter<"PartSize"> | number
  }

  export type PartCreateWithoutPartSizesInput = {
    label: string
    description?: string | null
    is_bookmarked?: boolean
    count: number
    tags?: string | null
    media: MediaCreateNestedOneWithoutPartInput
    subCategory: SubCategoryCreateNestedOneWithoutPartsInput
  }

  export type PartUncheckedCreateWithoutPartSizesInput = {
    id?: number
    label: string
    description?: string | null
    media_id: string
    sub_category_id: number
    is_bookmarked?: boolean
    count: number
    tags?: string | null
  }

  export type PartCreateOrConnectWithoutPartSizesInput = {
    where: PartWhereUniqueInput
    create: XOR<PartCreateWithoutPartSizesInput, PartUncheckedCreateWithoutPartSizesInput>
  }

  export type PartUpsertWithoutPartSizesInput = {
    update: XOR<PartUpdateWithoutPartSizesInput, PartUncheckedUpdateWithoutPartSizesInput>
    create: XOR<PartCreateWithoutPartSizesInput, PartUncheckedCreateWithoutPartSizesInput>
    where?: PartWhereInput
  }

  export type PartUpdateToOneWithWhereWithoutPartSizesInput = {
    where?: PartWhereInput
    data: XOR<PartUpdateWithoutPartSizesInput, PartUncheckedUpdateWithoutPartSizesInput>
  }

  export type PartUpdateWithoutPartSizesInput = {
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_bookmarked?: BoolFieldUpdateOperationsInput | boolean
    count?: IntFieldUpdateOperationsInput | number
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    media?: MediaUpdateOneRequiredWithoutPartNestedInput
    subCategory?: SubCategoryUpdateOneRequiredWithoutPartsNestedInput
  }

  export type PartUncheckedUpdateWithoutPartSizesInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    media_id?: StringFieldUpdateOperationsInput | string
    sub_category_id?: IntFieldUpdateOperationsInput | number
    is_bookmarked?: BoolFieldUpdateOperationsInput | boolean
    count?: IntFieldUpdateOperationsInput | number
    tags?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryCreateWithoutMediaInput = {
    label: string
    description?: string | null
    subCategories?: SubCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutMediaInput = {
    id?: number
    label: string
    description?: string | null
    subCategories?: SubCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutMediaInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutMediaInput, CategoryUncheckedCreateWithoutMediaInput>
  }

  export type CategoryCreateManyMediaInputEnvelope = {
    data: CategoryCreateManyMediaInput | CategoryCreateManyMediaInput[]
  }

  export type SubCategoryCreateWithoutMediaInput = {
    label: string
    category: CategoryCreateNestedOneWithoutSubCategoriesInput
    parts?: PartCreateNestedManyWithoutSubCategoryInput
    parent?: SubCategoryCreateNestedOneWithoutChildrenInput
    children?: SubCategoryCreateNestedManyWithoutParentInput
  }

  export type SubCategoryUncheckedCreateWithoutMediaInput = {
    id?: number
    label: string
    category_id: number
    parent_id?: number | null
    parts?: PartUncheckedCreateNestedManyWithoutSubCategoryInput
    children?: SubCategoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type SubCategoryCreateOrConnectWithoutMediaInput = {
    where: SubCategoryWhereUniqueInput
    create: XOR<SubCategoryCreateWithoutMediaInput, SubCategoryUncheckedCreateWithoutMediaInput>
  }

  export type SubCategoryCreateManyMediaInputEnvelope = {
    data: SubCategoryCreateManyMediaInput | SubCategoryCreateManyMediaInput[]
  }

  export type PartCreateWithoutMediaInput = {
    label: string
    description?: string | null
    is_bookmarked?: boolean
    count: number
    tags?: string | null
    subCategory: SubCategoryCreateNestedOneWithoutPartsInput
    partSizes?: PartSizeCreateNestedManyWithoutPartInput
  }

  export type PartUncheckedCreateWithoutMediaInput = {
    id?: number
    label: string
    description?: string | null
    sub_category_id: number
    is_bookmarked?: boolean
    count: number
    tags?: string | null
    partSizes?: PartSizeUncheckedCreateNestedManyWithoutPartInput
  }

  export type PartCreateOrConnectWithoutMediaInput = {
    where: PartWhereUniqueInput
    create: XOR<PartCreateWithoutMediaInput, PartUncheckedCreateWithoutMediaInput>
  }

  export type PartCreateManyMediaInputEnvelope = {
    data: PartCreateManyMediaInput | PartCreateManyMediaInput[]
  }

  export type CategoryUpsertWithWhereUniqueWithoutMediaInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutMediaInput, CategoryUncheckedUpdateWithoutMediaInput>
    create: XOR<CategoryCreateWithoutMediaInput, CategoryUncheckedCreateWithoutMediaInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutMediaInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutMediaInput, CategoryUncheckedUpdateWithoutMediaInput>
  }

  export type CategoryUpdateManyWithWhereWithoutMediaInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutMediaInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: IntFilter<"Category"> | number
    label?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    media_id?: StringFilter<"Category"> | string
  }

  export type SubCategoryUpsertWithWhereUniqueWithoutMediaInput = {
    where: SubCategoryWhereUniqueInput
    update: XOR<SubCategoryUpdateWithoutMediaInput, SubCategoryUncheckedUpdateWithoutMediaInput>
    create: XOR<SubCategoryCreateWithoutMediaInput, SubCategoryUncheckedCreateWithoutMediaInput>
  }

  export type SubCategoryUpdateWithWhereUniqueWithoutMediaInput = {
    where: SubCategoryWhereUniqueInput
    data: XOR<SubCategoryUpdateWithoutMediaInput, SubCategoryUncheckedUpdateWithoutMediaInput>
  }

  export type SubCategoryUpdateManyWithWhereWithoutMediaInput = {
    where: SubCategoryScalarWhereInput
    data: XOR<SubCategoryUpdateManyMutationInput, SubCategoryUncheckedUpdateManyWithoutMediaInput>
  }

  export type PartUpsertWithWhereUniqueWithoutMediaInput = {
    where: PartWhereUniqueInput
    update: XOR<PartUpdateWithoutMediaInput, PartUncheckedUpdateWithoutMediaInput>
    create: XOR<PartCreateWithoutMediaInput, PartUncheckedCreateWithoutMediaInput>
  }

  export type PartUpdateWithWhereUniqueWithoutMediaInput = {
    where: PartWhereUniqueInput
    data: XOR<PartUpdateWithoutMediaInput, PartUncheckedUpdateWithoutMediaInput>
  }

  export type PartUpdateManyWithWhereWithoutMediaInput = {
    where: PartScalarWhereInput
    data: XOR<PartUpdateManyMutationInput, PartUncheckedUpdateManyWithoutMediaInput>
  }

  export type SubCategoryCreateManyCategoryInput = {
    id?: number
    label: string
    media_id: string
    parent_id?: number | null
  }

  export type SubCategoryUpdateWithoutCategoryInput = {
    label?: StringFieldUpdateOperationsInput | string
    media?: MediaUpdateOneRequiredWithoutSubCategoryNestedInput
    parts?: PartUpdateManyWithoutSubCategoryNestedInput
    parent?: SubCategoryUpdateOneWithoutChildrenNestedInput
    children?: SubCategoryUpdateManyWithoutParentNestedInput
  }

  export type SubCategoryUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    media_id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    parts?: PartUncheckedUpdateManyWithoutSubCategoryNestedInput
    children?: SubCategoryUncheckedUpdateManyWithoutParentNestedInput
  }

  export type SubCategoryUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    media_id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PartCreateManySubCategoryInput = {
    id?: number
    label: string
    description?: string | null
    media_id: string
    is_bookmarked?: boolean
    count: number
    tags?: string | null
  }

  export type SubCategoryCreateManyParentInput = {
    id?: number
    label: string
    media_id: string
    category_id: number
  }

  export type PartUpdateWithoutSubCategoryInput = {
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_bookmarked?: BoolFieldUpdateOperationsInput | boolean
    count?: IntFieldUpdateOperationsInput | number
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    media?: MediaUpdateOneRequiredWithoutPartNestedInput
    partSizes?: PartSizeUpdateManyWithoutPartNestedInput
  }

  export type PartUncheckedUpdateWithoutSubCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    media_id?: StringFieldUpdateOperationsInput | string
    is_bookmarked?: BoolFieldUpdateOperationsInput | boolean
    count?: IntFieldUpdateOperationsInput | number
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    partSizes?: PartSizeUncheckedUpdateManyWithoutPartNestedInput
  }

  export type PartUncheckedUpdateManyWithoutSubCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    media_id?: StringFieldUpdateOperationsInput | string
    is_bookmarked?: BoolFieldUpdateOperationsInput | boolean
    count?: IntFieldUpdateOperationsInput | number
    tags?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubCategoryUpdateWithoutParentInput = {
    label?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutSubCategoriesNestedInput
    media?: MediaUpdateOneRequiredWithoutSubCategoryNestedInput
    parts?: PartUpdateManyWithoutSubCategoryNestedInput
    children?: SubCategoryUpdateManyWithoutParentNestedInput
  }

  export type SubCategoryUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    media_id?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    parts?: PartUncheckedUpdateManyWithoutSubCategoryNestedInput
    children?: SubCategoryUncheckedUpdateManyWithoutParentNestedInput
  }

  export type SubCategoryUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    media_id?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type PartSizeCreateManyPartInput = {
    id?: number
    code?: string
    price: number
    size: string
    width: string
    height: string
    thickness?: string | null
    RS1?: string | null
    RS2?: string | null
    design_file: Bytes
    is_bookmarked?: boolean
    meta: string
  }

  export type PartSizeUpdateWithoutPartInput = {
    code?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    width?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    thickness?: NullableStringFieldUpdateOperationsInput | string | null
    RS1?: NullableStringFieldUpdateOperationsInput | string | null
    RS2?: NullableStringFieldUpdateOperationsInput | string | null
    design_file?: BytesFieldUpdateOperationsInput | Bytes
    is_bookmarked?: BoolFieldUpdateOperationsInput | boolean
    meta?: StringFieldUpdateOperationsInput | string
  }

  export type PartSizeUncheckedUpdateWithoutPartInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    width?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    thickness?: NullableStringFieldUpdateOperationsInput | string | null
    RS1?: NullableStringFieldUpdateOperationsInput | string | null
    RS2?: NullableStringFieldUpdateOperationsInput | string | null
    design_file?: BytesFieldUpdateOperationsInput | Bytes
    is_bookmarked?: BoolFieldUpdateOperationsInput | boolean
    meta?: StringFieldUpdateOperationsInput | string
  }

  export type PartSizeUncheckedUpdateManyWithoutPartInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    width?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    thickness?: NullableStringFieldUpdateOperationsInput | string | null
    RS1?: NullableStringFieldUpdateOperationsInput | string | null
    RS2?: NullableStringFieldUpdateOperationsInput | string | null
    design_file?: BytesFieldUpdateOperationsInput | Bytes
    is_bookmarked?: BoolFieldUpdateOperationsInput | boolean
    meta?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateManyMediaInput = {
    id?: number
    label: string
    description?: string | null
  }

  export type SubCategoryCreateManyMediaInput = {
    id?: number
    label: string
    category_id: number
    parent_id?: number | null
  }

  export type PartCreateManyMediaInput = {
    id?: number
    label: string
    description?: string | null
    sub_category_id: number
    is_bookmarked?: boolean
    count: number
    tags?: string | null
  }

  export type CategoryUpdateWithoutMediaInput = {
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subCategories?: SubCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutMediaInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subCategories?: SubCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutMediaInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubCategoryUpdateWithoutMediaInput = {
    label?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutSubCategoriesNestedInput
    parts?: PartUpdateManyWithoutSubCategoryNestedInput
    parent?: SubCategoryUpdateOneWithoutChildrenNestedInput
    children?: SubCategoryUpdateManyWithoutParentNestedInput
  }

  export type SubCategoryUncheckedUpdateWithoutMediaInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    parts?: PartUncheckedUpdateManyWithoutSubCategoryNestedInput
    children?: SubCategoryUncheckedUpdateManyWithoutParentNestedInput
  }

  export type SubCategoryUncheckedUpdateManyWithoutMediaInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PartUpdateWithoutMediaInput = {
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_bookmarked?: BoolFieldUpdateOperationsInput | boolean
    count?: IntFieldUpdateOperationsInput | number
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    subCategory?: SubCategoryUpdateOneRequiredWithoutPartsNestedInput
    partSizes?: PartSizeUpdateManyWithoutPartNestedInput
  }

  export type PartUncheckedUpdateWithoutMediaInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sub_category_id?: IntFieldUpdateOperationsInput | number
    is_bookmarked?: BoolFieldUpdateOperationsInput | boolean
    count?: IntFieldUpdateOperationsInput | number
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    partSizes?: PartSizeUncheckedUpdateManyWithoutPartNestedInput
  }

  export type PartUncheckedUpdateManyWithoutMediaInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sub_category_id?: IntFieldUpdateOperationsInput | number
    is_bookmarked?: BoolFieldUpdateOperationsInput | boolean
    count?: IntFieldUpdateOperationsInput | number
    tags?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}