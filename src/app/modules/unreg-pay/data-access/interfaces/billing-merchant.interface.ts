export interface BillingMerchant {
  merchantName: string;
  displayName: string;
  pgMerchantName: string;
}

export interface Parameter {
  name: string;
  regex: string;
  hint: string | null;
  displayName: string;
  type: string;
  description: string;
  selectOption?: SelectOption[] | null;
  condition?: { parameterName: string, parameterValue: string } | string | null;
  additionalInfos?: string | null;
}

export interface SelectOption {
  name: string;
  value: string;
}

export interface BillingData {
  billingMerchant: BillingMerchant;
  note: string | null;
  notReplace: string | null;
  showAdditionalInfo: string | null;
  parameter: Parameter[];
}
