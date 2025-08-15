
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
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model AiModel
 * 
 */
export type AiModel = $Result.DefaultSelection<Prisma.$AiModelPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MessageRole: {
  USER: 'USER',
  ASSISTANT: 'ASSISTANT'
};

export type MessageRole = (typeof MessageRole)[keyof typeof MessageRole]


export const MessageType: {
  TEXT: 'TEXT',
  ERROR: 'ERROR'
};

export type MessageType = (typeof MessageType)[keyof typeof MessageType]

}

export type MessageRole = $Enums.MessageRole

export const MessageRole: typeof $Enums.MessageRole

export type MessageType = $Enums.MessageType

export const MessageType: typeof $Enums.MessageType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Chats
 * const chats = await prisma.chat.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Chats
   * const chats = await prisma.chat.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aiModel`: Exposes CRUD operations for the **AiModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AiModels
    * const aiModels = await prisma.aiModel.findMany()
    * ```
    */
  get aiModel(): Prisma.AiModelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Chat: 'Chat',
    AiModel: 'AiModel',
    Message: 'Message'
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
      modelProps: "chat" | "aiModel" | "message"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          createMany: {
            args: Prisma.ChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      AiModel: {
        payload: Prisma.$AiModelPayload<ExtArgs>
        fields: Prisma.AiModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AiModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AiModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiModelPayload>
          }
          findFirst: {
            args: Prisma.AiModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AiModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiModelPayload>
          }
          findMany: {
            args: Prisma.AiModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiModelPayload>[]
          }
          create: {
            args: Prisma.AiModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiModelPayload>
          }
          createMany: {
            args: Prisma.AiModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AiModelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiModelPayload>[]
          }
          delete: {
            args: Prisma.AiModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiModelPayload>
          }
          update: {
            args: Prisma.AiModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiModelPayload>
          }
          deleteMany: {
            args: Prisma.AiModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AiModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AiModelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiModelPayload>[]
          }
          upsert: {
            args: Prisma.AiModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiModelPayload>
          }
          aggregate: {
            args: Prisma.AiModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAiModel>
          }
          groupBy: {
            args: Prisma.AiModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<AiModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.AiModelCountArgs<ExtArgs>
            result: $Utils.Optional<AiModelCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    chat?: ChatOmit
    aiModel?: AiModelOmit
    message?: MessageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type ChatCountOutputType
   */

  export type ChatCountOutputType = {
    messages: number
  }

  export type ChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCountOutputType
     */
    select?: ChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type AiModelCountOutputType
   */

  export type AiModelCountOutputType = {
    messages: number
  }

  export type AiModelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | AiModelCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * AiModelCountOutputType without action
   */
  export type AiModelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiModelCountOutputType
     */
    select?: AiModelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AiModelCountOutputType without action
   */
  export type AiModelCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: string
    name: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["chat"]>
  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatFindUniqueArgs>(args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatFindFirstArgs>(args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatFindManyArgs>(args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends ChatCreateArgs>(args: SelectSubset<T, ChatCreateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatCreateManyArgs>(args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {ChatCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends ChatDeleteArgs>(args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUpdateArgs>(args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatDeleteManyArgs>(args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUpdateManyArgs>(args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats and returns the data updated in the database.
     * @param {ChatUpdateManyAndReturnArgs} args - Arguments to update many Chats.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends ChatUpsertArgs>(args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
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
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chat model
   */
  readonly fields: ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends Chat$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Chat$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Chat model
   */
  interface ChatFieldRefs {
    readonly id: FieldRef<"Chat", 'String'>
    readonly name: FieldRef<"Chat", 'String'>
    readonly userId: FieldRef<"Chat", 'String'>
    readonly createdAt: FieldRef<"Chat", 'DateTime'>
    readonly updatedAt: FieldRef<"Chat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }

  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat createManyAndReturn
   */
  export type ChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat updateManyAndReturn
   */
  export type ChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }

  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to delete.
     */
    limit?: number
  }

  /**
   * Chat.messages
   */
  export type Chat$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
  }


  /**
   * Model AiModel
   */

  export type AggregateAiModel = {
    _count: AiModelCountAggregateOutputType | null
    _avg: AiModelAvgAggregateOutputType | null
    _sum: AiModelSumAggregateOutputType | null
    _min: AiModelMinAggregateOutputType | null
    _max: AiModelMaxAggregateOutputType | null
  }

  export type AiModelAvgAggregateOutputType = {
    maxTokens: number | null
    temperature: number | null
  }

  export type AiModelSumAggregateOutputType = {
    maxTokens: number | null
    temperature: number | null
  }

  export type AiModelMinAggregateOutputType = {
    id: string | null
    name: string | null
    provider: string | null
    displayName: string | null
    description: string | null
    maxTokens: number | null
    temperature: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AiModelMaxAggregateOutputType = {
    id: string | null
    name: string | null
    provider: string | null
    displayName: string | null
    description: string | null
    maxTokens: number | null
    temperature: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AiModelCountAggregateOutputType = {
    id: number
    name: number
    provider: number
    displayName: number
    description: number
    maxTokens: number
    temperature: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AiModelAvgAggregateInputType = {
    maxTokens?: true
    temperature?: true
  }

  export type AiModelSumAggregateInputType = {
    maxTokens?: true
    temperature?: true
  }

  export type AiModelMinAggregateInputType = {
    id?: true
    name?: true
    provider?: true
    displayName?: true
    description?: true
    maxTokens?: true
    temperature?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AiModelMaxAggregateInputType = {
    id?: true
    name?: true
    provider?: true
    displayName?: true
    description?: true
    maxTokens?: true
    temperature?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AiModelCountAggregateInputType = {
    id?: true
    name?: true
    provider?: true
    displayName?: true
    description?: true
    maxTokens?: true
    temperature?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AiModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiModel to aggregate.
     */
    where?: AiModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiModels to fetch.
     */
    orderBy?: AiModelOrderByWithRelationInput | AiModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AiModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AiModels
    **/
    _count?: true | AiModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AiModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AiModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AiModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AiModelMaxAggregateInputType
  }

  export type GetAiModelAggregateType<T extends AiModelAggregateArgs> = {
        [P in keyof T & keyof AggregateAiModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiModel[P]>
      : GetScalarType<T[P], AggregateAiModel[P]>
  }




  export type AiModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiModelWhereInput
    orderBy?: AiModelOrderByWithAggregationInput | AiModelOrderByWithAggregationInput[]
    by: AiModelScalarFieldEnum[] | AiModelScalarFieldEnum
    having?: AiModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AiModelCountAggregateInputType | true
    _avg?: AiModelAvgAggregateInputType
    _sum?: AiModelSumAggregateInputType
    _min?: AiModelMinAggregateInputType
    _max?: AiModelMaxAggregateInputType
  }

  export type AiModelGroupByOutputType = {
    id: string
    name: string
    provider: string
    displayName: string | null
    description: string | null
    maxTokens: number | null
    temperature: number | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AiModelCountAggregateOutputType | null
    _avg: AiModelAvgAggregateOutputType | null
    _sum: AiModelSumAggregateOutputType | null
    _min: AiModelMinAggregateOutputType | null
    _max: AiModelMaxAggregateOutputType | null
  }

  type GetAiModelGroupByPayload<T extends AiModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AiModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AiModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiModelGroupByOutputType[P]>
            : GetScalarType<T[P], AiModelGroupByOutputType[P]>
        }
      >
    >


  export type AiModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    provider?: boolean
    displayName?: boolean
    description?: boolean
    maxTokens?: boolean
    temperature?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    messages?: boolean | AiModel$messagesArgs<ExtArgs>
    _count?: boolean | AiModelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiModel"]>

  export type AiModelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    provider?: boolean
    displayName?: boolean
    description?: boolean
    maxTokens?: boolean
    temperature?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aiModel"]>

  export type AiModelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    provider?: boolean
    displayName?: boolean
    description?: boolean
    maxTokens?: boolean
    temperature?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aiModel"]>

  export type AiModelSelectScalar = {
    id?: boolean
    name?: boolean
    provider?: boolean
    displayName?: boolean
    description?: boolean
    maxTokens?: boolean
    temperature?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AiModelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "provider" | "displayName" | "description" | "maxTokens" | "temperature" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["aiModel"]>
  export type AiModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | AiModel$messagesArgs<ExtArgs>
    _count?: boolean | AiModelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AiModelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AiModelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AiModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AiModel"
    objects: {
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      provider: string
      displayName: string | null
      description: string | null
      maxTokens: number | null
      temperature: number | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aiModel"]>
    composites: {}
  }

  type AiModelGetPayload<S extends boolean | null | undefined | AiModelDefaultArgs> = $Result.GetResult<Prisma.$AiModelPayload, S>

  type AiModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AiModelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AiModelCountAggregateInputType | true
    }

  export interface AiModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AiModel'], meta: { name: 'AiModel' } }
    /**
     * Find zero or one AiModel that matches the filter.
     * @param {AiModelFindUniqueArgs} args - Arguments to find a AiModel
     * @example
     * // Get one AiModel
     * const aiModel = await prisma.aiModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiModelFindUniqueArgs>(args: SelectSubset<T, AiModelFindUniqueArgs<ExtArgs>>): Prisma__AiModelClient<$Result.GetResult<Prisma.$AiModelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AiModel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AiModelFindUniqueOrThrowArgs} args - Arguments to find a AiModel
     * @example
     * // Get one AiModel
     * const aiModel = await prisma.aiModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiModelFindUniqueOrThrowArgs>(args: SelectSubset<T, AiModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AiModelClient<$Result.GetResult<Prisma.$AiModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiModelFindFirstArgs} args - Arguments to find a AiModel
     * @example
     * // Get one AiModel
     * const aiModel = await prisma.aiModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiModelFindFirstArgs>(args?: SelectSubset<T, AiModelFindFirstArgs<ExtArgs>>): Prisma__AiModelClient<$Result.GetResult<Prisma.$AiModelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiModelFindFirstOrThrowArgs} args - Arguments to find a AiModel
     * @example
     * // Get one AiModel
     * const aiModel = await prisma.aiModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiModelFindFirstOrThrowArgs>(args?: SelectSubset<T, AiModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__AiModelClient<$Result.GetResult<Prisma.$AiModelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AiModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiModels
     * const aiModels = await prisma.aiModel.findMany()
     * 
     * // Get first 10 AiModels
     * const aiModels = await prisma.aiModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aiModelWithIdOnly = await prisma.aiModel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AiModelFindManyArgs>(args?: SelectSubset<T, AiModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AiModel.
     * @param {AiModelCreateArgs} args - Arguments to create a AiModel.
     * @example
     * // Create one AiModel
     * const AiModel = await prisma.aiModel.create({
     *   data: {
     *     // ... data to create a AiModel
     *   }
     * })
     * 
     */
    create<T extends AiModelCreateArgs>(args: SelectSubset<T, AiModelCreateArgs<ExtArgs>>): Prisma__AiModelClient<$Result.GetResult<Prisma.$AiModelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AiModels.
     * @param {AiModelCreateManyArgs} args - Arguments to create many AiModels.
     * @example
     * // Create many AiModels
     * const aiModel = await prisma.aiModel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AiModelCreateManyArgs>(args?: SelectSubset<T, AiModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AiModels and returns the data saved in the database.
     * @param {AiModelCreateManyAndReturnArgs} args - Arguments to create many AiModels.
     * @example
     * // Create many AiModels
     * const aiModel = await prisma.aiModel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AiModels and only return the `id`
     * const aiModelWithIdOnly = await prisma.aiModel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AiModelCreateManyAndReturnArgs>(args?: SelectSubset<T, AiModelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiModelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AiModel.
     * @param {AiModelDeleteArgs} args - Arguments to delete one AiModel.
     * @example
     * // Delete one AiModel
     * const AiModel = await prisma.aiModel.delete({
     *   where: {
     *     // ... filter to delete one AiModel
     *   }
     * })
     * 
     */
    delete<T extends AiModelDeleteArgs>(args: SelectSubset<T, AiModelDeleteArgs<ExtArgs>>): Prisma__AiModelClient<$Result.GetResult<Prisma.$AiModelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AiModel.
     * @param {AiModelUpdateArgs} args - Arguments to update one AiModel.
     * @example
     * // Update one AiModel
     * const aiModel = await prisma.aiModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AiModelUpdateArgs>(args: SelectSubset<T, AiModelUpdateArgs<ExtArgs>>): Prisma__AiModelClient<$Result.GetResult<Prisma.$AiModelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AiModels.
     * @param {AiModelDeleteManyArgs} args - Arguments to filter AiModels to delete.
     * @example
     * // Delete a few AiModels
     * const { count } = await prisma.aiModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AiModelDeleteManyArgs>(args?: SelectSubset<T, AiModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiModels
     * const aiModel = await prisma.aiModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AiModelUpdateManyArgs>(args: SelectSubset<T, AiModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiModels and returns the data updated in the database.
     * @param {AiModelUpdateManyAndReturnArgs} args - Arguments to update many AiModels.
     * @example
     * // Update many AiModels
     * const aiModel = await prisma.aiModel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AiModels and only return the `id`
     * const aiModelWithIdOnly = await prisma.aiModel.updateManyAndReturn({
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
    updateManyAndReturn<T extends AiModelUpdateManyAndReturnArgs>(args: SelectSubset<T, AiModelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiModelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AiModel.
     * @param {AiModelUpsertArgs} args - Arguments to update or create a AiModel.
     * @example
     * // Update or create a AiModel
     * const aiModel = await prisma.aiModel.upsert({
     *   create: {
     *     // ... data to create a AiModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiModel we want to update
     *   }
     * })
     */
    upsert<T extends AiModelUpsertArgs>(args: SelectSubset<T, AiModelUpsertArgs<ExtArgs>>): Prisma__AiModelClient<$Result.GetResult<Prisma.$AiModelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AiModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiModelCountArgs} args - Arguments to filter AiModels to count.
     * @example
     * // Count the number of AiModels
     * const count = await prisma.aiModel.count({
     *   where: {
     *     // ... the filter for the AiModels we want to count
     *   }
     * })
    **/
    count<T extends AiModelCountArgs>(
      args?: Subset<T, AiModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AiModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AiModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AiModelAggregateArgs>(args: Subset<T, AiModelAggregateArgs>): Prisma.PrismaPromise<GetAiModelAggregateType<T>>

    /**
     * Group by AiModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiModelGroupByArgs} args - Group by arguments.
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
      T extends AiModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiModelGroupByArgs['orderBy'] }
        : { orderBy?: AiModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AiModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AiModel model
   */
  readonly fields: AiModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AiModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends AiModel$messagesArgs<ExtArgs> = {}>(args?: Subset<T, AiModel$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AiModel model
   */
  interface AiModelFieldRefs {
    readonly id: FieldRef<"AiModel", 'String'>
    readonly name: FieldRef<"AiModel", 'String'>
    readonly provider: FieldRef<"AiModel", 'String'>
    readonly displayName: FieldRef<"AiModel", 'String'>
    readonly description: FieldRef<"AiModel", 'String'>
    readonly maxTokens: FieldRef<"AiModel", 'Int'>
    readonly temperature: FieldRef<"AiModel", 'Float'>
    readonly isActive: FieldRef<"AiModel", 'Boolean'>
    readonly createdAt: FieldRef<"AiModel", 'DateTime'>
    readonly updatedAt: FieldRef<"AiModel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AiModel findUnique
   */
  export type AiModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiModel
     */
    select?: AiModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiModel
     */
    omit?: AiModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiModelInclude<ExtArgs> | null
    /**
     * Filter, which AiModel to fetch.
     */
    where: AiModelWhereUniqueInput
  }

  /**
   * AiModel findUniqueOrThrow
   */
  export type AiModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiModel
     */
    select?: AiModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiModel
     */
    omit?: AiModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiModelInclude<ExtArgs> | null
    /**
     * Filter, which AiModel to fetch.
     */
    where: AiModelWhereUniqueInput
  }

  /**
   * AiModel findFirst
   */
  export type AiModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiModel
     */
    select?: AiModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiModel
     */
    omit?: AiModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiModelInclude<ExtArgs> | null
    /**
     * Filter, which AiModel to fetch.
     */
    where?: AiModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiModels to fetch.
     */
    orderBy?: AiModelOrderByWithRelationInput | AiModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiModels.
     */
    cursor?: AiModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiModels.
     */
    distinct?: AiModelScalarFieldEnum | AiModelScalarFieldEnum[]
  }

  /**
   * AiModel findFirstOrThrow
   */
  export type AiModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiModel
     */
    select?: AiModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiModel
     */
    omit?: AiModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiModelInclude<ExtArgs> | null
    /**
     * Filter, which AiModel to fetch.
     */
    where?: AiModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiModels to fetch.
     */
    orderBy?: AiModelOrderByWithRelationInput | AiModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiModels.
     */
    cursor?: AiModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiModels.
     */
    distinct?: AiModelScalarFieldEnum | AiModelScalarFieldEnum[]
  }

  /**
   * AiModel findMany
   */
  export type AiModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiModel
     */
    select?: AiModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiModel
     */
    omit?: AiModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiModelInclude<ExtArgs> | null
    /**
     * Filter, which AiModels to fetch.
     */
    where?: AiModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiModels to fetch.
     */
    orderBy?: AiModelOrderByWithRelationInput | AiModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AiModels.
     */
    cursor?: AiModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiModels.
     */
    skip?: number
    distinct?: AiModelScalarFieldEnum | AiModelScalarFieldEnum[]
  }

  /**
   * AiModel create
   */
  export type AiModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiModel
     */
    select?: AiModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiModel
     */
    omit?: AiModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiModelInclude<ExtArgs> | null
    /**
     * The data needed to create a AiModel.
     */
    data: XOR<AiModelCreateInput, AiModelUncheckedCreateInput>
  }

  /**
   * AiModel createMany
   */
  export type AiModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AiModels.
     */
    data: AiModelCreateManyInput | AiModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiModel createManyAndReturn
   */
  export type AiModelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiModel
     */
    select?: AiModelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiModel
     */
    omit?: AiModelOmit<ExtArgs> | null
    /**
     * The data used to create many AiModels.
     */
    data: AiModelCreateManyInput | AiModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiModel update
   */
  export type AiModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiModel
     */
    select?: AiModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiModel
     */
    omit?: AiModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiModelInclude<ExtArgs> | null
    /**
     * The data needed to update a AiModel.
     */
    data: XOR<AiModelUpdateInput, AiModelUncheckedUpdateInput>
    /**
     * Choose, which AiModel to update.
     */
    where: AiModelWhereUniqueInput
  }

  /**
   * AiModel updateMany
   */
  export type AiModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AiModels.
     */
    data: XOR<AiModelUpdateManyMutationInput, AiModelUncheckedUpdateManyInput>
    /**
     * Filter which AiModels to update
     */
    where?: AiModelWhereInput
    /**
     * Limit how many AiModels to update.
     */
    limit?: number
  }

  /**
   * AiModel updateManyAndReturn
   */
  export type AiModelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiModel
     */
    select?: AiModelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiModel
     */
    omit?: AiModelOmit<ExtArgs> | null
    /**
     * The data used to update AiModels.
     */
    data: XOR<AiModelUpdateManyMutationInput, AiModelUncheckedUpdateManyInput>
    /**
     * Filter which AiModels to update
     */
    where?: AiModelWhereInput
    /**
     * Limit how many AiModels to update.
     */
    limit?: number
  }

  /**
   * AiModel upsert
   */
  export type AiModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiModel
     */
    select?: AiModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiModel
     */
    omit?: AiModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiModelInclude<ExtArgs> | null
    /**
     * The filter to search for the AiModel to update in case it exists.
     */
    where: AiModelWhereUniqueInput
    /**
     * In case the AiModel found by the `where` argument doesn't exist, create a new AiModel with this data.
     */
    create: XOR<AiModelCreateInput, AiModelUncheckedCreateInput>
    /**
     * In case the AiModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiModelUpdateInput, AiModelUncheckedUpdateInput>
  }

  /**
   * AiModel delete
   */
  export type AiModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiModel
     */
    select?: AiModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiModel
     */
    omit?: AiModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiModelInclude<ExtArgs> | null
    /**
     * Filter which AiModel to delete.
     */
    where: AiModelWhereUniqueInput
  }

  /**
   * AiModel deleteMany
   */
  export type AiModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiModels to delete
     */
    where?: AiModelWhereInput
    /**
     * Limit how many AiModels to delete.
     */
    limit?: number
  }

  /**
   * AiModel.messages
   */
  export type AiModel$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * AiModel without action
   */
  export type AiModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiModel
     */
    select?: AiModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiModel
     */
    omit?: AiModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiModelInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    inputTokens: number | null
    outputTokens: number | null
    totalTokens: number | null
  }

  export type MessageSumAggregateOutputType = {
    inputTokens: number | null
    outputTokens: number | null
    totalTokens: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    externalId: string | null
    content: string | null
    role: $Enums.MessageRole | null
    type: $Enums.MessageType | null
    inputTokens: number | null
    outputTokens: number | null
    totalTokens: number | null
    createdAt: Date | null
    updatedAt: Date | null
    chatId: string | null
    aiModelId: string | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    externalId: string | null
    content: string | null
    role: $Enums.MessageRole | null
    type: $Enums.MessageType | null
    inputTokens: number | null
    outputTokens: number | null
    totalTokens: number | null
    createdAt: Date | null
    updatedAt: Date | null
    chatId: string | null
    aiModelId: string | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    externalId: number
    content: number
    role: number
    type: number
    inputTokens: number
    outputTokens: number
    totalTokens: number
    createdAt: number
    updatedAt: number
    chatId: number
    aiModelId: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    inputTokens?: true
    outputTokens?: true
    totalTokens?: true
  }

  export type MessageSumAggregateInputType = {
    inputTokens?: true
    outputTokens?: true
    totalTokens?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    externalId?: true
    content?: true
    role?: true
    type?: true
    inputTokens?: true
    outputTokens?: true
    totalTokens?: true
    createdAt?: true
    updatedAt?: true
    chatId?: true
    aiModelId?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    externalId?: true
    content?: true
    role?: true
    type?: true
    inputTokens?: true
    outputTokens?: true
    totalTokens?: true
    createdAt?: true
    updatedAt?: true
    chatId?: true
    aiModelId?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    externalId?: true
    content?: true
    role?: true
    type?: true
    inputTokens?: true
    outputTokens?: true
    totalTokens?: true
    createdAt?: true
    updatedAt?: true
    chatId?: true
    aiModelId?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    externalId: string | null
    content: string
    role: $Enums.MessageRole
    type: $Enums.MessageType
    inputTokens: number | null
    outputTokens: number | null
    totalTokens: number | null
    createdAt: Date
    updatedAt: Date
    chatId: string
    aiModelId: string | null
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    content?: boolean
    role?: boolean
    type?: boolean
    inputTokens?: boolean
    outputTokens?: boolean
    totalTokens?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chatId?: boolean
    aiModelId?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    aiModel?: boolean | Message$aiModelArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    content?: boolean
    role?: boolean
    type?: boolean
    inputTokens?: boolean
    outputTokens?: boolean
    totalTokens?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chatId?: boolean
    aiModelId?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    aiModel?: boolean | Message$aiModelArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    content?: boolean
    role?: boolean
    type?: boolean
    inputTokens?: boolean
    outputTokens?: boolean
    totalTokens?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chatId?: boolean
    aiModelId?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    aiModel?: boolean | Message$aiModelArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    externalId?: boolean
    content?: boolean
    role?: boolean
    type?: boolean
    inputTokens?: boolean
    outputTokens?: boolean
    totalTokens?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chatId?: boolean
    aiModelId?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "externalId" | "content" | "role" | "type" | "inputTokens" | "outputTokens" | "totalTokens" | "createdAt" | "updatedAt" | "chatId" | "aiModelId", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    aiModel?: boolean | Message$aiModelArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    aiModel?: boolean | Message$aiModelArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    aiModel?: boolean | Message$aiModelArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      chat: Prisma.$ChatPayload<ExtArgs>
      aiModel: Prisma.$AiModelPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      externalId: string | null
      content: string
      role: $Enums.MessageRole
      type: $Enums.MessageType
      inputTokens: number | null
      outputTokens: number | null
      totalTokens: number | null
      createdAt: Date
      updatedAt: Date
      chatId: string
      aiModelId: string | null
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    aiModel<T extends Message$aiModelArgs<ExtArgs> = {}>(args?: Subset<T, Message$aiModelArgs<ExtArgs>>): Prisma__AiModelClient<$Result.GetResult<Prisma.$AiModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly externalId: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly role: FieldRef<"Message", 'MessageRole'>
    readonly type: FieldRef<"Message", 'MessageType'>
    readonly inputTokens: FieldRef<"Message", 'Int'>
    readonly outputTokens: FieldRef<"Message", 'Int'>
    readonly totalTokens: FieldRef<"Message", 'Int'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly updatedAt: FieldRef<"Message", 'DateTime'>
    readonly chatId: FieldRef<"Message", 'String'>
    readonly aiModelId: FieldRef<"Message", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message.aiModel
   */
  export type Message$aiModelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiModel
     */
    select?: AiModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiModel
     */
    omit?: AiModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiModelInclude<ExtArgs> | null
    where?: AiModelWhereInput
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ChatScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const AiModelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    provider: 'provider',
    displayName: 'displayName',
    description: 'description',
    maxTokens: 'maxTokens',
    temperature: 'temperature',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AiModelScalarFieldEnum = (typeof AiModelScalarFieldEnum)[keyof typeof AiModelScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    externalId: 'externalId',
    content: 'content',
    role: 'role',
    type: 'type',
    inputTokens: 'inputTokens',
    outputTokens: 'outputTokens',
    totalTokens: 'totalTokens',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    chatId: 'chatId',
    aiModelId: 'aiModelId'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'MessageRole'
   */
  export type EnumMessageRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageRole'>
    


  /**
   * Reference to a field of type 'MessageRole[]'
   */
  export type ListEnumMessageRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageRole[]'>
    


  /**
   * Reference to a field of type 'MessageType'
   */
  export type EnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType'>
    


  /**
   * Reference to a field of type 'MessageType[]'
   */
  export type ListEnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType[]'>
    
  /**
   * Deep Input Types
   */


  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    id?: StringFilter<"Chat"> | string
    name?: StringFilter<"Chat"> | string
    userId?: StringFilter<"Chat"> | string
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    messages?: MessageListRelationFilter
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    messages?: MessageOrderByRelationAggregateInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    name?: StringFilter<"Chat"> | string
    userId?: StringFilter<"Chat"> | string
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    messages?: MessageListRelationFilter
  }, "id">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chat"> | string
    name?: StringWithAggregatesFilter<"Chat"> | string
    userId?: StringWithAggregatesFilter<"Chat"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
  }

  export type AiModelWhereInput = {
    AND?: AiModelWhereInput | AiModelWhereInput[]
    OR?: AiModelWhereInput[]
    NOT?: AiModelWhereInput | AiModelWhereInput[]
    id?: StringFilter<"AiModel"> | string
    name?: StringFilter<"AiModel"> | string
    provider?: StringFilter<"AiModel"> | string
    displayName?: StringNullableFilter<"AiModel"> | string | null
    description?: StringNullableFilter<"AiModel"> | string | null
    maxTokens?: IntNullableFilter<"AiModel"> | number | null
    temperature?: FloatNullableFilter<"AiModel"> | number | null
    isActive?: BoolFilter<"AiModel"> | boolean
    createdAt?: DateTimeFilter<"AiModel"> | Date | string
    updatedAt?: DateTimeFilter<"AiModel"> | Date | string
    messages?: MessageListRelationFilter
  }

  export type AiModelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    provider?: SortOrder
    displayName?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    maxTokens?: SortOrderInput | SortOrder
    temperature?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    messages?: MessageOrderByRelationAggregateInput
  }

  export type AiModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: AiModelWhereInput | AiModelWhereInput[]
    OR?: AiModelWhereInput[]
    NOT?: AiModelWhereInput | AiModelWhereInput[]
    provider?: StringFilter<"AiModel"> | string
    displayName?: StringNullableFilter<"AiModel"> | string | null
    description?: StringNullableFilter<"AiModel"> | string | null
    maxTokens?: IntNullableFilter<"AiModel"> | number | null
    temperature?: FloatNullableFilter<"AiModel"> | number | null
    isActive?: BoolFilter<"AiModel"> | boolean
    createdAt?: DateTimeFilter<"AiModel"> | Date | string
    updatedAt?: DateTimeFilter<"AiModel"> | Date | string
    messages?: MessageListRelationFilter
  }, "id" | "name">

  export type AiModelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    provider?: SortOrder
    displayName?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    maxTokens?: SortOrderInput | SortOrder
    temperature?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AiModelCountOrderByAggregateInput
    _avg?: AiModelAvgOrderByAggregateInput
    _max?: AiModelMaxOrderByAggregateInput
    _min?: AiModelMinOrderByAggregateInput
    _sum?: AiModelSumOrderByAggregateInput
  }

  export type AiModelScalarWhereWithAggregatesInput = {
    AND?: AiModelScalarWhereWithAggregatesInput | AiModelScalarWhereWithAggregatesInput[]
    OR?: AiModelScalarWhereWithAggregatesInput[]
    NOT?: AiModelScalarWhereWithAggregatesInput | AiModelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AiModel"> | string
    name?: StringWithAggregatesFilter<"AiModel"> | string
    provider?: StringWithAggregatesFilter<"AiModel"> | string
    displayName?: StringNullableWithAggregatesFilter<"AiModel"> | string | null
    description?: StringNullableWithAggregatesFilter<"AiModel"> | string | null
    maxTokens?: IntNullableWithAggregatesFilter<"AiModel"> | number | null
    temperature?: FloatNullableWithAggregatesFilter<"AiModel"> | number | null
    isActive?: BoolWithAggregatesFilter<"AiModel"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AiModel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AiModel"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    externalId?: StringNullableFilter<"Message"> | string | null
    content?: StringFilter<"Message"> | string
    role?: EnumMessageRoleFilter<"Message"> | $Enums.MessageRole
    type?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
    inputTokens?: IntNullableFilter<"Message"> | number | null
    outputTokens?: IntNullableFilter<"Message"> | number | null
    totalTokens?: IntNullableFilter<"Message"> | number | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    chatId?: StringFilter<"Message"> | string
    aiModelId?: StringNullableFilter<"Message"> | string | null
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
    aiModel?: XOR<AiModelNullableScalarRelationFilter, AiModelWhereInput> | null
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    externalId?: SortOrderInput | SortOrder
    content?: SortOrder
    role?: SortOrder
    type?: SortOrder
    inputTokens?: SortOrderInput | SortOrder
    outputTokens?: SortOrderInput | SortOrder
    totalTokens?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chatId?: SortOrder
    aiModelId?: SortOrderInput | SortOrder
    chat?: ChatOrderByWithRelationInput
    aiModel?: AiModelOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    externalId?: StringNullableFilter<"Message"> | string | null
    content?: StringFilter<"Message"> | string
    role?: EnumMessageRoleFilter<"Message"> | $Enums.MessageRole
    type?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
    inputTokens?: IntNullableFilter<"Message"> | number | null
    outputTokens?: IntNullableFilter<"Message"> | number | null
    totalTokens?: IntNullableFilter<"Message"> | number | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    chatId?: StringFilter<"Message"> | string
    aiModelId?: StringNullableFilter<"Message"> | string | null
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
    aiModel?: XOR<AiModelNullableScalarRelationFilter, AiModelWhereInput> | null
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    externalId?: SortOrderInput | SortOrder
    content?: SortOrder
    role?: SortOrder
    type?: SortOrder
    inputTokens?: SortOrderInput | SortOrder
    outputTokens?: SortOrderInput | SortOrder
    totalTokens?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chatId?: SortOrder
    aiModelId?: SortOrderInput | SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    externalId?: StringNullableWithAggregatesFilter<"Message"> | string | null
    content?: StringWithAggregatesFilter<"Message"> | string
    role?: EnumMessageRoleWithAggregatesFilter<"Message"> | $Enums.MessageRole
    type?: EnumMessageTypeWithAggregatesFilter<"Message"> | $Enums.MessageType
    inputTokens?: IntNullableWithAggregatesFilter<"Message"> | number | null
    outputTokens?: IntNullableWithAggregatesFilter<"Message"> | number | null
    totalTokens?: IntNullableWithAggregatesFilter<"Message"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    chatId?: StringWithAggregatesFilter<"Message"> | string
    aiModelId?: StringNullableWithAggregatesFilter<"Message"> | string | null
  }

  export type ChatCreateInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatCreateManyInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiModelCreateInput = {
    id?: string
    name: string
    provider: string
    displayName?: string | null
    description?: string | null
    maxTokens?: number | null
    temperature?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageCreateNestedManyWithoutAiModelInput
  }

  export type AiModelUncheckedCreateInput = {
    id?: string
    name: string
    provider: string
    displayName?: string | null
    description?: string | null
    maxTokens?: number | null
    temperature?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutAiModelInput
  }

  export type AiModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxTokens?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutAiModelNestedInput
  }

  export type AiModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxTokens?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutAiModelNestedInput
  }

  export type AiModelCreateManyInput = {
    id?: string
    name: string
    provider: string
    displayName?: string | null
    description?: string | null
    maxTokens?: number | null
    temperature?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxTokens?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxTokens?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    externalId?: string | null
    content: string
    role: $Enums.MessageRole
    type: $Enums.MessageType
    inputTokens?: number | null
    outputTokens?: number | null
    totalTokens?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chat: ChatCreateNestedOneWithoutMessagesInput
    aiModel?: AiModelCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    externalId?: string | null
    content: string
    role: $Enums.MessageRole
    type: $Enums.MessageType
    inputTokens?: number | null
    outputTokens?: number | null
    totalTokens?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatId: string
    aiModelId?: string | null
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    inputTokens?: NullableIntFieldUpdateOperationsInput | number | null
    outputTokens?: NullableIntFieldUpdateOperationsInput | number | null
    totalTokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
    aiModel?: AiModelUpdateOneWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    inputTokens?: NullableIntFieldUpdateOperationsInput | number | null
    outputTokens?: NullableIntFieldUpdateOperationsInput | number | null
    totalTokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: StringFieldUpdateOperationsInput | string
    aiModelId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageCreateManyInput = {
    id?: string
    externalId?: string | null
    content: string
    role: $Enums.MessageRole
    type: $Enums.MessageType
    inputTokens?: number | null
    outputTokens?: number | null
    totalTokens?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatId: string
    aiModelId?: string | null
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    inputTokens?: NullableIntFieldUpdateOperationsInput | number | null
    outputTokens?: NullableIntFieldUpdateOperationsInput | number | null
    totalTokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    inputTokens?: NullableIntFieldUpdateOperationsInput | number | null
    outputTokens?: NullableIntFieldUpdateOperationsInput | number | null
    totalTokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: StringFieldUpdateOperationsInput | string
    aiModelId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AiModelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    provider?: SortOrder
    displayName?: SortOrder
    description?: SortOrder
    maxTokens?: SortOrder
    temperature?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AiModelAvgOrderByAggregateInput = {
    maxTokens?: SortOrder
    temperature?: SortOrder
  }

  export type AiModelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    provider?: SortOrder
    displayName?: SortOrder
    description?: SortOrder
    maxTokens?: SortOrder
    temperature?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AiModelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    provider?: SortOrder
    displayName?: SortOrder
    description?: SortOrder
    maxTokens?: SortOrder
    temperature?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AiModelSumOrderByAggregateInput = {
    maxTokens?: SortOrder
    temperature?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumMessageRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageRole | EnumMessageRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageRoleFilter<$PrismaModel> | $Enums.MessageRole
  }

  export type EnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
  }

  export type ChatScalarRelationFilter = {
    is?: ChatWhereInput
    isNot?: ChatWhereInput
  }

  export type AiModelNullableScalarRelationFilter = {
    is?: AiModelWhereInput | null
    isNot?: AiModelWhereInput | null
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    content?: SortOrder
    role?: SortOrder
    type?: SortOrder
    inputTokens?: SortOrder
    outputTokens?: SortOrder
    totalTokens?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chatId?: SortOrder
    aiModelId?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    inputTokens?: SortOrder
    outputTokens?: SortOrder
    totalTokens?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    content?: SortOrder
    role?: SortOrder
    type?: SortOrder
    inputTokens?: SortOrder
    outputTokens?: SortOrder
    totalTokens?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chatId?: SortOrder
    aiModelId?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    content?: SortOrder
    role?: SortOrder
    type?: SortOrder
    inputTokens?: SortOrder
    outputTokens?: SortOrder
    totalTokens?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chatId?: SortOrder
    aiModelId?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    inputTokens?: SortOrder
    outputTokens?: SortOrder
    totalTokens?: SortOrder
  }

  export type EnumMessageRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageRole | EnumMessageRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageRoleWithAggregatesFilter<$PrismaModel> | $Enums.MessageRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageRoleFilter<$PrismaModel>
    _max?: NestedEnumMessageRoleFilter<$PrismaModel>
  }

  export type EnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
  }

  export type MessageCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MessageUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageCreateNestedManyWithoutAiModelInput = {
    create?: XOR<MessageCreateWithoutAiModelInput, MessageUncheckedCreateWithoutAiModelInput> | MessageCreateWithoutAiModelInput[] | MessageUncheckedCreateWithoutAiModelInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutAiModelInput | MessageCreateOrConnectWithoutAiModelInput[]
    createMany?: MessageCreateManyAiModelInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutAiModelInput = {
    create?: XOR<MessageCreateWithoutAiModelInput, MessageUncheckedCreateWithoutAiModelInput> | MessageCreateWithoutAiModelInput[] | MessageUncheckedCreateWithoutAiModelInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutAiModelInput | MessageCreateOrConnectWithoutAiModelInput[]
    createMany?: MessageCreateManyAiModelInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type MessageUpdateManyWithoutAiModelNestedInput = {
    create?: XOR<MessageCreateWithoutAiModelInput, MessageUncheckedCreateWithoutAiModelInput> | MessageCreateWithoutAiModelInput[] | MessageUncheckedCreateWithoutAiModelInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutAiModelInput | MessageCreateOrConnectWithoutAiModelInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutAiModelInput | MessageUpsertWithWhereUniqueWithoutAiModelInput[]
    createMany?: MessageCreateManyAiModelInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutAiModelInput | MessageUpdateWithWhereUniqueWithoutAiModelInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutAiModelInput | MessageUpdateManyWithWhereWithoutAiModelInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutAiModelNestedInput = {
    create?: XOR<MessageCreateWithoutAiModelInput, MessageUncheckedCreateWithoutAiModelInput> | MessageCreateWithoutAiModelInput[] | MessageUncheckedCreateWithoutAiModelInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutAiModelInput | MessageCreateOrConnectWithoutAiModelInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutAiModelInput | MessageUpsertWithWhereUniqueWithoutAiModelInput[]
    createMany?: MessageCreateManyAiModelInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutAiModelInput | MessageUpdateWithWhereUniqueWithoutAiModelInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutAiModelInput | MessageUpdateManyWithWhereWithoutAiModelInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ChatCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    connect?: ChatWhereUniqueInput
  }

  export type AiModelCreateNestedOneWithoutMessagesInput = {
    create?: XOR<AiModelCreateWithoutMessagesInput, AiModelUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: AiModelCreateOrConnectWithoutMessagesInput
    connect?: AiModelWhereUniqueInput
  }

  export type EnumMessageRoleFieldUpdateOperationsInput = {
    set?: $Enums.MessageRole
  }

  export type EnumMessageTypeFieldUpdateOperationsInput = {
    set?: $Enums.MessageType
  }

  export type ChatUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    upsert?: ChatUpsertWithoutMessagesInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutMessagesInput, ChatUpdateWithoutMessagesInput>, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type AiModelUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<AiModelCreateWithoutMessagesInput, AiModelUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: AiModelCreateOrConnectWithoutMessagesInput
    upsert?: AiModelUpsertWithoutMessagesInput
    disconnect?: AiModelWhereInput | boolean
    delete?: AiModelWhereInput | boolean
    connect?: AiModelWhereUniqueInput
    update?: XOR<XOR<AiModelUpdateToOneWithWhereWithoutMessagesInput, AiModelUpdateWithoutMessagesInput>, AiModelUncheckedUpdateWithoutMessagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumMessageRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageRole | EnumMessageRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageRoleFilter<$PrismaModel> | $Enums.MessageRole
  }

  export type NestedEnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
  }

  export type NestedEnumMessageRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageRole | EnumMessageRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageRoleWithAggregatesFilter<$PrismaModel> | $Enums.MessageRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageRoleFilter<$PrismaModel>
    _max?: NestedEnumMessageRoleFilter<$PrismaModel>
  }

  export type NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
  }

  export type MessageCreateWithoutChatInput = {
    id?: string
    externalId?: string | null
    content: string
    role: $Enums.MessageRole
    type: $Enums.MessageType
    inputTokens?: number | null
    outputTokens?: number | null
    totalTokens?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aiModel?: AiModelCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutChatInput = {
    id?: string
    externalId?: string | null
    content: string
    role: $Enums.MessageRole
    type: $Enums.MessageType
    inputTokens?: number | null
    outputTokens?: number | null
    totalTokens?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aiModelId?: string | null
  }

  export type MessageCreateOrConnectWithoutChatInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageCreateManyChatInputEnvelope = {
    data: MessageCreateManyChatInput | MessageCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type MessageUpsertWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
  }

  export type MessageUpdateManyWithWhereWithoutChatInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutChatInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    externalId?: StringNullableFilter<"Message"> | string | null
    content?: StringFilter<"Message"> | string
    role?: EnumMessageRoleFilter<"Message"> | $Enums.MessageRole
    type?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
    inputTokens?: IntNullableFilter<"Message"> | number | null
    outputTokens?: IntNullableFilter<"Message"> | number | null
    totalTokens?: IntNullableFilter<"Message"> | number | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    chatId?: StringFilter<"Message"> | string
    aiModelId?: StringNullableFilter<"Message"> | string | null
  }

  export type MessageCreateWithoutAiModelInput = {
    id?: string
    externalId?: string | null
    content: string
    role: $Enums.MessageRole
    type: $Enums.MessageType
    inputTokens?: number | null
    outputTokens?: number | null
    totalTokens?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutAiModelInput = {
    id?: string
    externalId?: string | null
    content: string
    role: $Enums.MessageRole
    type: $Enums.MessageType
    inputTokens?: number | null
    outputTokens?: number | null
    totalTokens?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatId: string
  }

  export type MessageCreateOrConnectWithoutAiModelInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutAiModelInput, MessageUncheckedCreateWithoutAiModelInput>
  }

  export type MessageCreateManyAiModelInputEnvelope = {
    data: MessageCreateManyAiModelInput | MessageCreateManyAiModelInput[]
    skipDuplicates?: boolean
  }

  export type MessageUpsertWithWhereUniqueWithoutAiModelInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutAiModelInput, MessageUncheckedUpdateWithoutAiModelInput>
    create: XOR<MessageCreateWithoutAiModelInput, MessageUncheckedCreateWithoutAiModelInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutAiModelInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutAiModelInput, MessageUncheckedUpdateWithoutAiModelInput>
  }

  export type MessageUpdateManyWithWhereWithoutAiModelInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutAiModelInput>
  }

  export type ChatCreateWithoutMessagesInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatUncheckedCreateWithoutMessagesInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatCreateOrConnectWithoutMessagesInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
  }

  export type AiModelCreateWithoutMessagesInput = {
    id?: string
    name: string
    provider: string
    displayName?: string | null
    description?: string | null
    maxTokens?: number | null
    temperature?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiModelUncheckedCreateWithoutMessagesInput = {
    id?: string
    name: string
    provider: string
    displayName?: string | null
    description?: string | null
    maxTokens?: number | null
    temperature?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiModelCreateOrConnectWithoutMessagesInput = {
    where: AiModelWhereUniqueInput
    create: XOR<AiModelCreateWithoutMessagesInput, AiModelUncheckedCreateWithoutMessagesInput>
  }

  export type ChatUpsertWithoutMessagesInput = {
    update: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiModelUpsertWithoutMessagesInput = {
    update: XOR<AiModelUpdateWithoutMessagesInput, AiModelUncheckedUpdateWithoutMessagesInput>
    create: XOR<AiModelCreateWithoutMessagesInput, AiModelUncheckedCreateWithoutMessagesInput>
    where?: AiModelWhereInput
  }

  export type AiModelUpdateToOneWithWhereWithoutMessagesInput = {
    where?: AiModelWhereInput
    data: XOR<AiModelUpdateWithoutMessagesInput, AiModelUncheckedUpdateWithoutMessagesInput>
  }

  export type AiModelUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxTokens?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiModelUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxTokens?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyChatInput = {
    id?: string
    externalId?: string | null
    content: string
    role: $Enums.MessageRole
    type: $Enums.MessageType
    inputTokens?: number | null
    outputTokens?: number | null
    totalTokens?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aiModelId?: string | null
  }

  export type MessageUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    inputTokens?: NullableIntFieldUpdateOperationsInput | number | null
    outputTokens?: NullableIntFieldUpdateOperationsInput | number | null
    totalTokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiModel?: AiModelUpdateOneWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    inputTokens?: NullableIntFieldUpdateOperationsInput | number | null
    outputTokens?: NullableIntFieldUpdateOperationsInput | number | null
    totalTokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiModelId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    inputTokens?: NullableIntFieldUpdateOperationsInput | number | null
    outputTokens?: NullableIntFieldUpdateOperationsInput | number | null
    totalTokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiModelId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageCreateManyAiModelInput = {
    id?: string
    externalId?: string | null
    content: string
    role: $Enums.MessageRole
    type: $Enums.MessageType
    inputTokens?: number | null
    outputTokens?: number | null
    totalTokens?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatId: string
  }

  export type MessageUpdateWithoutAiModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    inputTokens?: NullableIntFieldUpdateOperationsInput | number | null
    outputTokens?: NullableIntFieldUpdateOperationsInput | number | null
    totalTokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutAiModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    inputTokens?: NullableIntFieldUpdateOperationsInput | number | null
    outputTokens?: NullableIntFieldUpdateOperationsInput | number | null
    totalTokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUncheckedUpdateManyWithoutAiModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    inputTokens?: NullableIntFieldUpdateOperationsInput | number | null
    outputTokens?: NullableIntFieldUpdateOperationsInput | number | null
    totalTokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: StringFieldUpdateOperationsInput | string
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