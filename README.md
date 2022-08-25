# kebab-remover
A Discord bot for detecting and deleting TikTok videos.

## Installation
1. Clone this repository (press the green code button and either download zip or `git clone` the url)
2. Switch to the repository folder: `cd kebab-remover`
3. Install the Node dependencies: `npm install`
4. Run the bot: `npm run bot`

## Configuration
JSON schema:
```json
{
    "dtoken": "OTk5MjYzODE0IlKsJm1AHyd2.JgRvqO.JlvXSablY7LijKwOD57fCd-pOElfxh6bOKlhyXE",
    "save_dest": "/path/to/discord/bot",
    "size_limit": "50",
    "wipe_ready": true,
    "ignore_channels": [1010280615976915126, 1010304460532240485]
}
```
- `dtoken`: The token of the Discord bot to use.
- `save_dest`: Destination to save the videos to (and analyze videos from). This must be an absolute path.
- `size_limit`: File size limit for the videos in MBs.
- `wipe_ready`: Wipes the videos folder when the bot starts up, if set to **true**.
- `ignore_channels`: Array of channel IDs that are ignored. The bot won't download any videos from these channels, if specifed.

**NOTE: the token in the example JSON is not valid.**
