#!groovy

globalrepoBranch="master"

stage('Checkout Global Library') {
    def cells_ci, cells_node_label
    node {
      cells_node_label = "${env.cells_node_label}"
      globalrepo = "${env.globalrepo}"
      globalrepo_credentials_id="${env.globalrepo_credentials_id}"
    }
    def repoParams = [:];

    fileLoader.withGit(globalrepo, globalrepoBranch, globalrepo_credentials_id, cells_node_label) {
        cells_ci = fileLoader.load('src/cells/ci/ci');
        cells_ci.cells_ci_flow(repoParams)
    }
}