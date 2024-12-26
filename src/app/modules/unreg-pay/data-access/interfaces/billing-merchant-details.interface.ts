export interface BillingMerchant {
  merchantName: string;
  displayName: string;
  pgMerchantName: string;
}

export interface BillingOption {
  name: string;
  paymentId: string;
  type: string;
  title: string;
  paymentType: string;
  minAmount: number;
  maxAmount: number;
  balance: number | null;
  amountDue: number | null;
  tariff: any | null;
  additionalInfos: any | null;
  amountOption: any | null;
}

export interface PaymentMethod {
  card: Array<{
    displayName: string;
    value: string;
  }>;
  savedCard: any | null;
  credits: any[];
  walletBalance: any | null;
  avansBalance: any | null;
}

export interface Parameter {
  title: string;
  name: string;
  value: string;
  displayValue: string;
}

export interface DataInterface {
  billingMerchant: BillingMerchant;
  subscriberInfo: any | null;
  billingOption: BillingOption[];
  note: any | null;
  linkPayments: any | null;
  paymentMethod: PaymentMethod;
  feeExist: boolean;
  enableMasterpass: boolean;
  categoryDisplayName: string;
  categoryName: string;
  showAdditionalInfo: any | null;
  showCoin: boolean;
  code: any | null;
  showMicrolending: boolean;
  amount: any | null;
  enableMasterpassPayPage: boolean;
  hideParameters: any | null;
  hideBalance: any | null;
  recoveryParameters: any | null;
  parameters: Parameter[];
  ulduzum: boolean;
}
