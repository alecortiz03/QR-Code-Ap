import Button from '@/Components/Button';
import React from 'react';

import { createQRCode } from '@/Services/Buttons/GenerateQR';
import { saveQRCode } from '@/Services/Buttons/SaveQR';
import URLSearchBar from '@/Components/URLSearchBar';
import QRViewer from '@/Components/QRViewer';
import { Images } from '@/AppData/Images';
import { BlurView } from 'expo-blur';

import { View, StyleSheet, ImageBackground } from 'react-native';

export default function Dashboard() {
	const [url, setUrl] = React.useState('');
	const [imageData, setImageData] = React.useState(null);

	return (
		<ImageBackground
			style={styles.page}
			source={Images.DashboardBackground}
			resizeMode='cover'>
			<BlurView
				tint='dark'
				intensity={60}
				style={styles.blurBackground}
			/>

			<View style={styles.content}>
				<QRViewer
					imageData={imageData}
					style={styles.qrView}
				/>

				<URLSearchBar
					value={url}
					onChangeText={setUrl}
					placeholder='URL Link'
					style={styles.urlSearchBar}
				/>

				<View style={styles.buttonGroup}>
					<Button
						style={styles.button}
						text={'Generate'}
						color={'#ddd9d9a0'}
						onPress={async () => {
							const qrCodeData = await createQRCode(url);
							setImageData(qrCodeData);
						}}
					/>

					<Button
						style={styles.button}
						text={'Save QR Code'}
						color={'#ddd9d9a0'}
						onPress={() => saveQRCode(imageData)}
					/>

					<Button
						style={styles.button}
						text={'Clear'}
						color={'#ddd9d9a0'}
						onPress={() => {
							setImageData(null);
							setUrl('');
						}}
					/>
				</View>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},

	blurBackground: {
		...StyleSheet.absoluteFillObject,
	},

	content: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 20,
	},

	qrView: {
		marginVertical: 25,
	},

	urlSearchBar: {
		borderWidth: 3,
		width: '90%',
		maxWidth: 500,
	},

	buttonGroup: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 12,
		marginTop: 20,
		width: '90%',
		maxWidth: 700,
		marginBottom: 20,
	},

	button: {
		borderWidth: 3,
		borderColor: '#ddd9d9a0',
		minWidth: 140,
	},
});
