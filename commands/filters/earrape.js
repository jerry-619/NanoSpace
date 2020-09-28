const delay = require('delay');
const { earrape } = require('../../config/volume.js')
const chalk = require('chalk');

module.exports = { 
    config: {
        name: "earrape",
        description: "Destroy your ear!",
        category: "filters",
        accessableby: "Member",
        aliases: ["ear"]
    },

    run: async (bot, message, filter) => {
        const msg = await message.channel.send("Turning on `Bass` please wait...");

        const player = bot.music.players.get(message.guild.id);
        if(!player) return msg.edit("No song/s currently playing in this guild.");

        const { voiceChannel } = message.member;
        if (!voiceChannel) return message.channel.send("You need to be in a voice channel to play music.");

        player.setVolume(earrape);
        player.setEQ(...Array(6).fill(0).map((n, i) => ([{ band: i, gain: 0.5 }])));

        await delay(5000);
        msg.edit('Turn on `Earrape`');
                console.log(chalk.magenta(`  [Command]: Earrape used by ${message.author.tag} from ${message.guild.name}`));
    }
};