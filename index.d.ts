export interface k6jUnitConfiguration{
  includeThresholds?: boolean;
  testCasePassCondition?: (passed: number, failed: number) => boolean;
}

export function jUnit(data: any, cfg?: k6jUnitConfiguration): any;

