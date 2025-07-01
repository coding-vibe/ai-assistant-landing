const generateAssetPath = (assetName: string): string =>
  `${process.env.NEXT_PUBLIC_CMS_API_HOST}/api/${assetName}`;

export default generateAssetPath;
