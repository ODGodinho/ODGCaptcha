import { z } from "zod";

import { ReCaptchaDomain, ReCaptchaScore } from "src/enums/ReCaptchaEnum";

export const reCaptchaRequestSchema = z.object({
    "websiteUrl": z.string().url(),
    "websiteKey": z.string(),
    "proxy": z.object({
        "host": z.string().url(),
        "port": z.number().nullish(),
        "username": z.string(),
        "password": z.string(),
    }).optional(),
    "score": z.nativeEnum(ReCaptchaScore),
    "enterprisePayload": z.record(z.any()).optional(),
    "apiDomain": z.nativeEnum(ReCaptchaDomain).optional(),
});

export const reCaptchaRequestV2Schema = reCaptchaRequestSchema.merge(z.object({
    "type": z.literal("v2"),
    "isInvisible": z.boolean().optional(),
}));

export const reCaptchaRequestV3Schema = reCaptchaRequestSchema.merge(z.object({
    "type": z.literal("v3"),
}));

export const reCaptchaResponseSchema = z.object({
    "solution": z.object({
        "token": z.string(),
    }),
    "taskId": z.string().or(z.number()),
});
