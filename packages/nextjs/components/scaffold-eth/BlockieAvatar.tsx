import { AvatarComponent } from "@rainbow-me/rainbowkit";
import Blockies from "react-blockies";

// Custom Avatar for RainbowKit
export const BlockieAvatar: AvatarComponent = ({ address, ensImage, size }) => {
  // hack to replace the ens avatar url with a cloudflare gateway url
  const ensAvatar = ensImage?.replace("https://gateway.ipfs.io/", "https://cloudflare-ipfs.com/");

  return ensAvatar ? (
    // Don't want to use nextJS Image here (and adding remote patterns for the URL)
    // eslint-disable-next-line
      <img className="rounded-full" src={ensAvatar} width={size} height={size} alt={`${address} avatar`} />
  ) : (
    <Blockies className="rounded-full" seed={address?.toLowerCase() as string} scale={size > 30 ? 10 : 3.75} />
  );
};
