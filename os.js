// The node:os module provides operating system-related utility methods and properties. It can be accessed using:
const os = require("os");

// (1) os.EOL (The operating system-specific end-of-line marker.)
const eol = os.EOL;
console.log("1", "EOL::", eol);

// (2) os.availableParallelism()
// Returns an estimate of the default amount of parallelism a program should use.
// Always returns a value greater than zero.
const availableCPU = os.availableParallelism();
console.log("2", "availableCPU::", availableCPU);

// (3) os.arch()
// Returns the operating system CPU architecture for which the Node.js binary was compiled.
// Possible values are 'arm', 'arm64', 'ia32', 'loong64', 'mips', 'mipsel', 'ppc', 'ppc64', 'riscv64', 's390', 's390x', and 'x64'.
// The return value is equivalent to process.arch.
const architecture = os.arch();
console.log("3", "architecture::", architecture);

// (4) os.cpus()
// Returns an array of objects containing information about each logical CPU core.
// The array will be empty if no CPU information is available, such as if the /proc file system is unavailable.
// os.cpus().length should not be used to calculate the amount of parallelism available to an application.
const cpus = os.cpus();
console.log("4", "cpus::", cpus);

// (5) os.devNull
// The platform-specific file path of the null device.
const nullDevice = os.devNull;
console.log(`5 nullDevice:: ${nullDevice}`);

// (6) os.endianness()
// Returns a string identifying the endianness of the CPU for which the Node.js binary was compiled.
// Possible values are 'BE' for big endian and 'LE' for little endian.
// Endianness refers to the byte order in which the individual bytes of a multi-byte data type are stored in memory.
const endianness = os.endianness();
console.log(`6 endianness:: ${endianness}`);

// (7) os.freemem()
// Returns the amount of free system memory in bytes as an integer.
const freeMemory = os.freemem();
console.log(`7 freeMemory::`, freeMemory, `bytes`);

// (8) os.getPriority([pid])
// Returns the scheduling priority for the process specified by pid.
// If pid is not provided or is 0, the priority of the current process is returned.
//  it's typically a value between -20 and 19, where a lower value indicates higher priority.
const pidToCheck = 11492;
const priority = os.getPriority(pidToCheck);
console.log(`8 priority:: ${priority}`);

// (9) os.homedir()
// Returns the string path of the current user's home directory.
const homeDir = os.homedir();
console.log(`9 homeDir:: ${homeDir}`);

// (10) os.hostname()
// Returns the host name of the operating system as a string.
const hostName = os.hostname();
console.log(`10 hostName:: ${hostName}`);

// (11) os.loadavg()
// Returns an array containing the 1, 5, and 15 minute load averages.
// The load average is a measure of system activity calculated by the operating system and expressed as a fractional number.
// The load average is a Unix-specific concept. On Windows, the return value is always [0, 0, 0].
const loadAvarage = os.loadavg();
console.log("11 loadAvrage::", loadAvarage);

// (12) os.machine()
// Returns the machine type as a string, such as arm, arm64, aarch64, mips, mips64, ppc64, ppc64le, s390, s390x, i386, i686, x86_64.
const machineType = os.machine();
console.log(`12 machineType::`, machineType);

// (13) os.networkInterfaces()
// Returns an object containing network interfaces that have been assigned a network address.
// Each key on the returned object identifies a network interface.
const networkInterfaces = os.networkInterfaces();
console.log(`13 networkInterfaces::`, networkInterfaces);

// (14) os.platform()
// Returns a string identifying the operating system platform for which the Node.js binary was compiled.
// The value is set at compile time. Possible values are 'aix', 'darwin', 'freebsd','linux', 'openbsd', 'sunos', and 'win32'.
// The return value is equivalent to process.platform.
const osPlatform = os.platform();
console.log(`14 osPlatform::`, osPlatform);

// (15) os.release()
// Returns the operating system as a string.
const osRelease = os.release();
console.log(`15 osRelease`, osRelease);

// (16) os.setPriority([pid, ]priority)
// Attempts to set the scheduling priority for the process specified by pid.
// If pid is not provided or is 0, the process ID of the current process is used.
const pid = 2768;
const priorityToSet = 10;
os.setPriority(pid, priorityToSet);

// (17) os.tmpdir()
// Returns the operating system's default directory for temporary files as a string.
const tempFilesPasth = os.tmpdir();
console.log(`17 tempFilesPasth::`, tempFilesPasth);

// (18) os.totalmem()
// Returns the total amount of system memory in bytes as an integer.
const totalMemory = os.totalmem();
console.log(`18 totalMemory::`, totalMemory, "bytes");

// (19) os.type()
// Returns the operating system name as returned by uname(3).
// For example, it returns 'Linux' on Linux, 'Darwin' on macOS, and 'Windows_NT' on Windows.
const osType = os.type();
console.log(`19 osType::`, osType);

// (20) os.uptime()
// Returns the system uptime in number of seconds.
const osUptime = os.uptime();
console.log(`20 osUptime::`, osUptime, "seconds");

// (21) os.userInfo([options])
// Returns information about the currently effective user.
//  Default: 'utf8'.
const osUserInfo = os.userInfo({ encoding: "utf8" }); //encoding = 'utf8'/'buffer'
console.log(`21 osUserInfo::`, osUserInfo);

// (22) os.version()
// Returns a string identifying the kernel version.
const osKernalVersion = os.version();
console.log(`22 osKernalversion::`, osKernalVersion);
