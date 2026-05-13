import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	useWindowDimensions,
} from 'react-native';

export default function Button({ text, color, textColor, onPress, style }) {
	const { width: screenWidth, height: screenHeight } = useWindowDimensions();

	const buttonHeight = Math.max(screenHeight * 0.06, 50);

	const fontSize = Math.max(screenWidth * 0.03, 16);

	const borderRadius = buttonHeight * 0.9;

	const horizontalPadding = Math.max(screenWidth * 0.015, 20);

	return (
		<TouchableOpacity
			onPress={onPress}
			style={[
				styles.button,
				{
					backgroundColor: color,
					borderRadius,
					minHeight: buttonHeight,
					paddingHorizontal: horizontalPadding,
					paddingVertical: buttonHeight * 0.2,
				},
				style,
			]}>
			<Text
				numberOfLines={1}
				adjustsFontSizeToFit
				style={[
					styles.buttonText,
					{
						color: textColor,
						fontSize,
					},
				]}>
				{text}
			</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'center',

		shadowColor: 'rgba(0,0,0,0.25)',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 1,
		shadowRadius: 4,

		elevation: 4,
	},

	buttonText: {
		fontWeight: 'bold',
		textAlign: 'center',

		textShadowColor: 'rgba(0,0,0,0.25)',
		textShadowOffset: {
			width: 0,
			height: 2,
		},
		textShadowRadius: 4,
	},
});
