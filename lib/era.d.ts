/**
 * Cyko - Date and Time
 *
 * ---
 *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 */

declare module 'era' {

  /**
   * Get an objective representation of the **package.json** contents.
   *
   * ```ts
   * interface example {
   *   name: string;
   *   version: string;
   *   description: string;
   *   keywords: string[ ... ];
   *   license: string;
   *   author: string | { name: string; email: string; };
   *   config: { ...; };
   *   scripts: { ...; };
   *   dependencies: { ...; };
   *   repository: { type: string; url: string; };
   * };
   * ```
   */

  function package(): object;

  /* ----------------------------------------------------------------------- */

  /**
   * Module configuration ( structure ).
   */

  type configuration = {
    locale: {
      name: string;
      zone: string;
      tick: number;
    };
  };

  /**
   * Module configuraton ( set | get ).
   *
   * - All properties are optional.
   * - All properties have default values.
   * - All properties (except: head) name a function.
   *
   * > ---
   *
   * Set any number of properties ( see the {@link configuration} structure ).
   * ```js
   * log.config({ property: 'value' });
   * ```
   * Get the current configuration.
   * ```js
   * log.config();
   * ```
   *
   * > ---
   *
   * ```ts
   * // Structure.
   * type configuration = {
   *   locale: {
   *     name: string; // example: 'en-US'
   *     zone: string; // example: 'America/New_York'
   *     tick: number; // example: 12 (number of hours in a day)
   *   };
   * };
   * ```
   *
   * @returns `this` or the current {@link configuration}.
   */

  function config(arg?: configuration | null): log | configuration;

  /* ----------------------------------------------------------------------- */

  /**
   * Date utilities.
   */

  namespace date {

    /**
     * Returns the current date.
     *
     * ```js
     * era.date.string()
     * > 'yyyy/mm/dd'
     * ```
     */

    function string(): string;

    /**
     * Returns the current year.
     *
     * ```js
     * era.date.year()
     * > 1988
     * ```
     */

    function year(): number;

    /**
     * Returns the current month.
     *
     * ```js
     * era.date.month()
     * > 3
     * ```
     */

    function month(): number;

    /**
     * Returns the current day ( date ).
     *
     * ```js
     * era.date.day()
     * > 29
     * ```
     */

    function day(): number;

  };

  /* ----------------------------------------------------------------------- */

  /**
   * Time utilities.
   */

  namespace time {

    /**
     * Returns the current time.
     *
     * ```js
     * era.time.string()
     * > 'hh:mm:ss'
     * ```
     */

    function string(): string;

    /**
     * Returns the current hour.
     *
     * ```js
     * era.time.hour()
     * > 23
     * ```
     */

    function hour(): number;

    /**
     * Returns the current minute.
     *
     * ```js
     * era.time.minute()
     * > 59
     * ```
     */

    function minute(): number;

    /**
     * Returns the current second.
     *
     * ```js
     * era.time.second()
     * > 59
     * ```
     */

    function second(): number;

  };

};
