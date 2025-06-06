import {
  BodyProcessLabel,
  CalculateCastleVerdeIndexData,
  CalculationRequest,
  ChatgptFoodLookupData,
  CheckHealthData,
  FoodLookupRequest,
  ProcessLabelData,
} from "./data-contracts";

export namespace Brain {
  /**
   * @description Check health of application. Returns 200 when OK, 500 when not.
   * @name check_health
   * @summary Check Health
   * @request GET:/_healthz
   */
  export namespace check_health {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CheckHealthData;
  }

  /**
   * @description Accepts an image file, performs OCR using Google Vision, and returns raw text.
   * @tags dbtn/module:ocr
   * @name process_label
   * @summary Process Label
   * @request POST:/routes/process-label
   */
  export namespace process_label {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BodyProcessLabel;
    export type RequestHeaders = {};
    export type ResponseBody = ProcessLabelData;
  }

  /**
   * @description Receives a food name, queries OpenAI (GPT model) to estimate its macronutrients (protein, fat, total carbs, sugar, fiber), and returns them in a structured JSON format.
   * @tags dbtn/module:chatgpt_lookup
   * @name chatgpt_food_lookup
   * @summary Chatgpt Food Lookup
   * @request POST:/routes/chatgpt-food-lookup
   */
  export namespace chatgpt_food_lookup {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = FoodLookupRequest;
    export type RequestHeaders = {};
    export type ResponseBody = ChatgptFoodLookupData;
  }

  /**
   * @description Calculates the Castle Verde GSP score based on aggregated macronutrient data. Accepts the total protein, fat, total carbs, fiber, and sugar for a meal or cart, along with an 'anchor' macronutrient ('Protein', 'Fiber', 'Fat', 'Sugar', 'TotalCarbs'). It returns the predicted GSP score (based on actual input macros using the GSP formula), the original input macros, and the balanced macros calculated using the fixed ratio (4:2:3:1:2), excluding net carbs in the balanced output. Includes noise on GSP and balanced macros. Includes an internal toggle for fiber calculation (default=True).
   * @tags CastleVerdeIndex, dbtn/module:castle_verde_index
   * @name calculate_castle_verde_index
   * @summary Calculate Castle Verde Index
   * @request POST:/routes/castle-verde/calculate-index
   */
  export namespace calculate_castle_verde_index {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CalculationRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CalculateCastleVerdeIndexData;
  }
}
