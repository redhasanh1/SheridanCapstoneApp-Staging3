import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerDevices = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Devices, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly DeviceId?: string | null;
  readonly DeviceName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDevices = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Devices, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly DeviceId?: string | null;
  readonly DeviceName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Devices = LazyLoading extends LazyLoadingDisabled ? EagerDevices : LazyDevices

export declare const Devices: (new (init: ModelInit<Devices>) => Devices) & {
  copyOf(source: Devices, mutator: (draft: MutableModel<Devices>) => MutableModel<Devices> | void): Devices;
}