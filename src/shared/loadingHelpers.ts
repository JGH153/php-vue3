import { useLoaderStore } from "@/stores/loader.store";

// interface WrapperType {
//   blocking?: boolean;
//   type?: LoadingType;
// }

export const globalLoadingWrapper = async <ReturnType>(
  wrappedFunction: () => Promise<ReturnType>
) => {
  const loaderStore = useLoaderStore();
  loaderStore.changeBlockingRequests(1);

  let returnVal: ReturnType;
  try {
    returnVal = await wrappedFunction();
  } finally {
    // Make sure we unblock the UI even if any exceptions are thrown
    loaderStore.changeBlockingRequests(-1);
  }
  return returnVal;
};

// export const onParamChange = (callback: () => Promise<any>) => {
//   const route = useRouteComputed();
//   watch(
//     route,
//     () => {
//       globalLoadingWrapper({ blocking: true }, async () => {
//         await callback();
//       });
//     },
//     { immediate: true }
//   );
// };
