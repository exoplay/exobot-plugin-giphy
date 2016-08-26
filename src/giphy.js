import { ChatPlugin, respond, help, permissionGroup } from '@exoplay/exobot';

export const ENDPOINT = 'http://api.giphy.com/v1/gifs/search';

export class Giphy extends ChatPlugin {
  help = 'Help: Explains commands. Say "<botname> help" for information.';

  constructor (options={}) {
    const { apiKey } = options;
    super(...arguments);

    this.apiKey = apiKey;
  }

  register (bot) {
    super.register(...arguments);

    if (!this.apiKey) {
      bot.log.critical('No apiKey passed to Giphy plugin; plugin will not work.');
    }
  }

  @permissionGroup('gif');
  @help('/gif <search> to search giphy for a gif');
  @respond(/^(?:gif|giphy)(?:\sme)?\s+(.*)/i);
  async giphy ([, search]) {
    try {
      const { body } = await this.bot.http.get(ENDPOINT)
                     .query({ q: search, api_key: this.apiKey });

      const { data } = body;

      if (data.length) {
        return data[parseInt(Math.random() * data.length)].images.original.url;
      }
    } catch (e) {
      this.bot.log.notice('Error returned from Giphy request.');
      this.bot.log.debug(e);
    }
  }
}
