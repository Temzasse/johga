// Based on https://github.com/sanity-io/next-sanity
import {
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
  createCurrentUserHook,
} from "next-sanity";

import { config } from "./config";

export const urlFor = (source: string) =>
  createImageUrlBuilder(config).image(source);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const PortableText = createPortableTextComponent({
  dataset: config.dataset,
  projectId: config.projectId,
  serializers: {},
});

export const useCurrentUser = createCurrentUserHook(config);
