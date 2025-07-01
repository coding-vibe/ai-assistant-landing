const generateAssetPath = (assetName: string): string =>
  `${process.env.NEXT_PUBLIC_CMS_API_HOST}${assetName}`;

export default generateAssetPath;
