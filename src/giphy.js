import { ChatPlugin, respond, help, permissionGroup, PropTypes as T } from '@exoplay/exobot';

export const ENDPOINT = 'http://api.giphy.com/v1/gifs/search';

export class Giphy extends ChatPlugin {
  name = 'giphy';

  propTypes = {
    apiKey: T.string.isRequired,
  };

  @permissionGroup('gif');
  @help('/gif <search> to search giphy for a gif');
  @respond(/^(?:gif|giphy)(?:\sme)?\s+(.*)/i);
  async giphy ([, search]) {
    try {
      const { body } = await this.bot.http.get(ENDPOINT)
                     .query({ q: search, api_key: this.options.apiKey });

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
