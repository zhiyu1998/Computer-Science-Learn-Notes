package classAndObj

class Host(val hostname: String) {
    fun printHostname() { print(hostname) }

    override fun toString(): String {
        return "Host(hostname='$hostname')"
    }
}

class Connection(val host: Host, val port: Int) {
    fun printPort() { print(port) }

    // 扩展Host
    fun Host.printConnectionString() {
        printHostname()   // 调用 Host.printHostname()
        print(":")
        printPort()   // 调用 Connection.printPort()

        toString() // 调用 Host.toString()
        this@Connection.toString() // 调用 Connection.toString()
    }

    fun connect() {
        /*……*/
        host.printConnectionString()   // 调用扩展函数
    }
}

fun main() {
    Connection(Host("kotl.in"), 443).connect()
}