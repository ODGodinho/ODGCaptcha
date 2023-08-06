import { type ReCaptchaReportStatus } from "../enums/ReCaptchaEnum";

import {
    type ReCaptchaResponseType,
    type ReCaptchaRequestType,
} from "./ReCaptchaInterface";

export interface CaptchaInterface {
    solve(options: ReCaptchaRequestType): Promise<ReCaptchaResponseType>;
    report(taskId: number | string, status: ReCaptchaReportStatus): Promise<void>;
}
