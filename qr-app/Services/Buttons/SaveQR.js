import { Platform } from 'react-native';
import * as FileSystem from 'expo-file-system/legacy';
import * as MediaLibrary from 'expo-media-library';

export async function saveQRCode(imageData) {
	if (!imageData) {
		alert('No QR code to save. Please generate one first.');
		return;
	}

	if (Platform.OS === 'web') {
		const link = document.createElement('a');
		link.href = imageData;
		link.download = 'qr-code.png';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		return;
	}

	const permission = await MediaLibrary.requestPermissionsAsync();
	if (permission.status !== 'granted') {
		alert(
			'Permission to access media library is required to save the QR code.',
		);
		return;
	}

	const base64 = imageData.replace('data:image/png;base64,', '');
	const fileUri = `${FileSystem.cacheDirectory}qr-code.png`;
	await FileSystem.writeAsStringAsync(fileUri, base64, {
		encoding: FileSystem.EncodingType.Base64,
	});
	await MediaLibrary.saveToLibraryAsync(fileUri);

	alert('QR code saved to your gallery!');
}
