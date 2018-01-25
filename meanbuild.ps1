param(
    $projectName,
    $dbName,
    [switch] $help
)

$appPath = "C:\Users\emilc\psscript\mean-builder\base-app\"

$h = @"
This is a simple mean builder application that will build a templated and boilerplated login reg
commands:
-projectName name of project
-dbName name of database

example:
meanbuild mynewproject mynewdb || meanbuild -dbName mynewdb -projectName mynewproject
"@

if ($help) {
    echo $h
}
else {
    if ($dbName) {
        $db = @"
mongoose.connect('mongodb://localhost/$dbName');
"@
        if ($projectName) {
            echo 'building application:'$projectName
            Copy-Item $appPath $projectName -Recurse -Container
            echo 'build finished'
            echo 'installing server side dependencies...'
            cd $projectName'/server'
            npm install
            echo 'install finished'
            echo 'setting up your db...'
            cd './config'
            $content = Get-Content 'mongoose.ts'
            $content[8] = $db
            $content | Set-Content 'mongoose.ts'
            echo 'db setupd complete'
            echo 'installing client side dependencies...'
            cd './../../client/WebApp'
            npm install 
            echo 'install finished'
            cd './../../'
            git init
            git add .
            git commit -m 'initial commit'
            code .
            cd './server'
            ts-node 'server.ts'
        }
    }
    else {
        echo "must include database and project name. do -help from more info"
    }
}