import { type z } from "zod";

import {
    type reCaptchaResponseSchema,
    type reCaptchaRequestV2Schema,
    type reCaptchaRequestV3Schema,
} from "../schemas";

export type ReCaptchaV2RequestType = z.infer<typeof reCaptchaRequestV2Schema>;

export type ReCaptchaV3RequestType = z.infer<typeof reCaptchaRequestV3Schema>;

export type ReCaptchaRequestType = ReCaptchaV2RequestType | ReCaptchaV3RequestType;

export type ReCaptchaResponseType = z.infer<typeof reCaptchaResponseSchema>;
