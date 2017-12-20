---
layout: post
title: "Installing Tomcat on macOS Sierra"
tags: Java
---

Download Apache Tomcat on [http://tomcat.apache.org](http://tomcat.apache.org). Select the latest version, and download the binary distribution of the core module in `tar.gz`.

Unzip the `tar.gz` file. You may use the freeware app __Unarchiver__, which is perfect for all kinds of compressed files.

Move the unarchived folder to `/Library`. If you cannot find the _Library_ folder, Go to _Finder > Go > Go to Folder..._, input `/Library` and click __Go__.

<!-- more -->

Rename it `Tomcat`.

Change ownership of the `/Library/Tomcat` folder hierarchy:

~~~
sudo chown -R <your_username>/Library/Tomcat
~~~

Make all scripts executable:

~~~
sudo chmod +x /Library/Tomcat/bin/*.sh
~~~

Download the freeware app __Tomcat Controller__. Set up the Preferences as follows: Tomcat Home Directory `/Library/Tomcat`. Tomcat Port `8080`. Default Application `/`.