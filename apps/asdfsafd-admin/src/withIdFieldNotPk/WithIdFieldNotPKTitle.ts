import { WithIdFieldNotPK as TWithIdFieldNotPK } from "../api/withIdFieldNotPk/WithIdFieldNotPK";

export const WITHIDFIELDNOTPK_TITLE_FIELD = "name";

export const WithIdFieldNotPKTitle = (record: TWithIdFieldNotPK): string => {
  return record.name || String(record.id);
};
