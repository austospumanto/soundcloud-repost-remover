If you want to use it:

```
git clone https://github.com/austospumanto/soundcloud-repost-remover.git
cd soundcloud repost remover
brew install yarn
yarn install
yarn build
```

Then go to your Chrome Extensions, enable developer mode, import the packed extension "build" folder resulting from the `yarn build` command (<GIT_ROOT>/build/).

Then go to soundcloud.com/stream, press on the little blue repost icon in your extensions bar, then click "Start" and wait until it stops doing stuff (don't touch *anything* after pressing "Start"). Then press "Stop". Then press "RR". You may have to press "RR" again if it fails the first time.. lol