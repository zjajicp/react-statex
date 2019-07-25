import { StoreConsumer } from './store-provider';
import { makeConnect } from './connector.jsx';

export const connect = makeConnect(StoreConsumer);
export * from './extras';
export * from './store-provider.jsx';
