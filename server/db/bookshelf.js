import knex from 'knex'
import bookshelf from 'bookshelf'
import config from '../../knexfile'

export default bookshelf(knex(config.development));