import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

const Docs = new Mongo.Collection('docs')

Meteor.startup(() => {
  Docs.update({ _id: 'test1' }, { test: 'foo' }, { upsert: true })
  Docs.update({ _id: 'test2' }, { test: 'bar' }, { upsert: true })
})

Meteor.publish(null, function () {
  const test = undefined
  const cursor = Docs.find({ test })

  console.log(cursor.fetch())

  return cursor
})
