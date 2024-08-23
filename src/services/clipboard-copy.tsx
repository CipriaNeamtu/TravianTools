export const copyTextToClipboard = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text);
        console.log('%cclipboard-copy service', `font-weight: 900; background-color: #06856F; color: #FFFFFF; padding: 5px 15px; border-radius: 4px;`, ': Copied to the clipboard.');
    } catch (error) {
        console.error('clipboard-copy service::copyTextToClipboard:', error);
    }
}