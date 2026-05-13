import QRCode from 'qrcode';

export async function createQRCode(URL) {
	try {
		const qrCodeDataURL = await QRCode.toDataURL(URL);
		return qrCodeDataURL; // This will return the QR code as a data URL
	} catch (err) {
		console.error(err);
	}
}
