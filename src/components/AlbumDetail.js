import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image,
  image, url } = album;
  const { thumbnailContainerStyle,
    headContainer,
    thumbnailImage,
    headerText,
    imageStyle
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
        <Image
        style={thumbnailImage}
        source={{ uri: thumbnail_image }}
        />
        </View>
        <View style={headContainer}>
          <Text style={headerText}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
        style={imageStyle}
        source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
        Buy Now!!
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headContainer: {
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  thumbnailImage: {
    width: 50,
    height: 50
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
      justifyContent: 'center',
      marginLeft: 10,
      marginRight: 10,

  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  }
};

export default AlbumDetail;
