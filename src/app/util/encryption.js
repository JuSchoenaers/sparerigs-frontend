import forge from 'node-forge';


async function encrypt(data) {
    const publicKeyPem = process.env.PUBLIC_RSA_KEY;
    const publicKey = forge.pki.publicKeyFromPem(publicKeyPem);
    const encryptedPassword = publicKey.encrypt(data, 'RSA-OAEP', {
        md: forge.md.sha256.create(),
        mgf1: { md: forge.md.sha256.create() },
    });
    return forge.util.encode64(encryptedPassword);
}

export default encrypt;