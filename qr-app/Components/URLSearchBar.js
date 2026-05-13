import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useWindowDimensions } from 'react-native';

export default function URLSearchBar({
	value,
	onChangeText,
	placeholder,
	style,
}) {
	const { width: screenWidth, height: screenHeight } = useWindowDimensions();

	const inputWidth = Math.max(screenWidth * 0.6, 300);
	const inputHeight = Math.max(screenHeight * 0.09, 50);
	const inputPaddingHorizontal = Math.max(screenWidth * 0.025, 20);

	return (
		<TextInput
			value={value}
			onChangeText={onChangeText}
			style={[
				styles.input,
				{
					minWidth: inputWidth,
					height: inputHeight,
					fontSize: inputHeight * 0.2,
					borderRadius: inputHeight * 0.5,
					paddingHorizontal: inputPaddingHorizontal,
					placeholderFontSize: inputHeight * 0.4,
					color: 'white',
				},
				style,
			]}
			placeholder={placeholder}
		/>
	);
}

const styles = StyleSheet.create({
	input: {
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: '2%',
		borderRadius: 30,
		placeholderTextColor: 'gray',
	},
});
