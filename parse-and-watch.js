const watchman = require('fb-watchman')

const client = new watchman.Client()
const dir_of_interest = __dirname + '/source'

client.capabilityCheck({optional:[], required:['relative_root']},
  function (error, resp) {
    if (error) {
      console.log(error)
      client.end()
      return
    }

    // Initiate the watch
    client.command(['watch-project', dir_of_interest],
      function (error, resp) {
        if (error) {
          console.error('Error initiating watch:', error)
          return
        }

        // It is considered to be best practice to show any 'warning' or
        // 'error' information to the user, as it may suggest steps
        // for remediation
        if ('warning' in resp) {
          console.log('warning: ', resp.warning)
        }

        // `watch-project` can consolidate the watch for your
        // dir_of_interest with another watch at a higher level in the
        // tree, so it is very important to record the `relative_path`
        // returned in resp

        console.log('watch established on ', resp.watch,
                    ' relative_path', resp.relative_path)
        make_subscription(client, resp.watch, resp.relative_path)
      }
    )
  }
)

// `watch` is obtained from `resp.watch` in the `watch-project` response.
// `relative_path` is obtained from `resp.relative_path` in the
// `watch-project` response.
function make_subscription(client, watch, relative_path) {
  let sub = {
    // Match any `.js` file in the dir_of_interest
    expression: ['allof', ['match', '*.js']],
    // Which fields we're interested in
    fields: ['name', 'size', 'mtime_ms', 'exists', 'type']
  }
  if (relative_path) {
    sub.relative_root = relative_path
  }

  client.command(['subscribe', watch, 'mysubscription', sub],
    function (error, resp) {
      if (error) {
        // Probably an error in the subscription criteria
        console.error('failed to subscribe: ', error)
        return
      }
      console.log('subscription ' + resp.subscribe + ' established')
    })

  // Subscription results are emitted via the subscription event.
  // Note that this emits for all subscriptions.  If you have
  // subscriptions with different `fields` you will need to check
  // the subscription name and handle the differing data accordingly.
  // `resp`  looks like this in practice:
  //
  // { root: '/private/tmp/foo',
  //   subscription: 'mysubscription',
  //   files: [ { name: 'node_modules/fb-watchman/index.js',
  //       size: 4768,
  //       exists: true,
  //       type: 'f' } ] }
  client.on('subscription', function (resp) {
    if (resp.subscription !== 'mysubscription') return
    console.log('-------------------')
    resp.files.forEach(function (file) {
      // convert Int64 instance to javascript integer
      const mtime_ms = +file.mtime_ms

      console.log('file changed: ' + file.name, mtime_ms)

    })
    parseSource(resp)
  })
}


const read = require('fs-readdir-recursive')
const beautify = require('json-beautify')
const fs = require('fs')
const mkdirp = require('mkdirp')
function parseSource(resp) {

  console.log('-------------------')
  console.log('parseSource')
  // PARSE ALL FUNCTIONALITY SPECIFIATIONS
  let files = read(__dirname+'/source').filter((file) => {
    if (!(/_models/).test(file)) {
      mkdirp(__dirname+'/parsed/'+file.replace(/[^\/]+$/,''))
      return true
    }
  })

  files.forEach((file) => {
    let sourcePath = __dirname+'/source/'+file
    let parts = file.split('/')
    let parsedName = parts[0]+'/'+parts[1]
    let parsePath = __dirname+'/parsed/'+file
    // console.log(sourcePath, require.resolve(sourcePath))
    // console.log(parsePath, require.resolve(parsePath))
    try {
      let specification = require(sourcePath)
      if (require.resolve(sourcePath)) delete require.cache[require.resolve(sourcePath)]
      let specificationString = beautify(specification, null, 2)
      fs.writeFile(parsePath, specificationString, (err) => {
        if (err) throw err
        console.log('Specification parsed', parsePath)
      })


      /*
       TEST IF PAGE ID CAN BE AUTO ADDED TO SOURCE, ON SOURCE SAVE
      let autoNumberPages = (pages, number) => {
        if(!pages) return
        if (!number) number = ''
        else number += '.'
        pages.forEach((page, i) => {
          // let innernumber = number + (i + 1)
          let innernumber = number + '/detail/'(i + 1)
          page.id = innernumber
          console.log(innernumber)
          if (page.pages) {
            autoNumberPages(page.pages, innernumber)
          }
        })
      }
      let json = JSON.parse(specificationString)
      autoNumberPages(json.pages)
      let jsonStringNumbered = beautify(json, null, 2)
      fs.writeFile(parsePath+'.js', jsonStringNumbered, (err) => {
        if (err) throw err
        console.log('Specification parsed', parsePath)
      })
      */

    } catch (e) {
      console.log('oh no big error')
      console.log(e)
    }
  })
}

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ', err)
  console.log(err.stack)
})
