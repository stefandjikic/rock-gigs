import { AspectRatio, Image } from "@chakra-ui/react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ ytId, bandName }) => {
  return (
    <AspectRatio maxW={{ base: "full", md: "380" }} ratio={16 / 9}>
      {ytId !== null ? (
        <iframe
          src={`https://www.youtube.com/embed/${ytId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={`Embeded - ${bandName}`}
        />
      ) : (
        <Image src="/images/rocco-dipoppa.jpg" objectFit="cover" alt="band" />
      )}
    </AspectRatio>
  );
};

YoutubeEmbed.propTypes = {
  ytId: PropTypes.string,
};

export default YoutubeEmbed;
