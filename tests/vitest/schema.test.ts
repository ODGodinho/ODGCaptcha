import { reCaptchaRequestV2Schema, reCaptchaRequestV3Schema, type ReCaptchaRequestType } from "src";

describe("Schema Teste", () => {
    test("V2 Schema Teste", () => {
        const reCaptchaV2: ReCaptchaRequestType = {
            type: "v2",
            score: 0.1,
            websiteUrl: "https://www.google.com",
            websiteKey: "anything",
        };
        expect(() => reCaptchaRequestV2Schema.parse(reCaptchaV2)).not.toThrow();
    });
    test("V3 Schema Teste", () => {
        const reCaptchaV3: ReCaptchaRequestType = {
            type: "v3",
            score: 0.1,
            websiteUrl: "https://www.google.com",
            websiteKey: "anything",
        };
        expect(() => reCaptchaRequestV3Schema.parse(reCaptchaV3)).not.toThrow();
    });
});
