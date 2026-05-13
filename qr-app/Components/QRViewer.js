import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useWindowDimensions } from 'react-native';

import BlurView from 'expo-blur';

export default function QRViewer({ imageData, style }) {
	const { width: screenWidth, height: screenHeight } = useWindowDimensions();
	const containerHeight = Math.max(screenHeight * 0.6, 200);
	const containerWidth = Math.max(screenWidth * 0.8, 300);
	const borderRadius = containerHeight * 0.1;

	return (
		<View
			style={[
				styles.container,
				style,
				{
					width: containerWidth,
					height: containerHeight,
					borderRadius: borderRadius,
				},
			]}>
			{imageData ?
				<Image
					source={{ uri: imageData }}
					style={{
						width: '70%',
						height: '70%',
						borderRadius: borderRadius * 0.5,
					}}
					resizeMode='contain'
				/>
			:	<Text style={{ color: 'white', fontSize: 18 }}>
					Your QR code will appear here
				</Text>
			}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#46474a75',
		borderWidth: 3,
		borderColor: '#fff',
	},
});
