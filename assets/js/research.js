/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "A practical approach for road quality estimation using smartphone-based inertial data: IMU data processing pipeline to estimate road quality",
    authors: "Nagaraj, Deepak, Mutz, Marcel, Mysore Venkatesh, Supreeth, Riebschlaeger, Lea, Werth, Dirk",
    conferences: "Proceedings of the 2022 7th International Conference on Machine Learning Technologies",
    researchYr: 2022,
    image: "assets/images/research-page/road-quality.jpg",
    bibtex: 
    `
    @inproceedings{10.1145/3529399.3529414,
    author = {Nagaraj, Deepak and Mutz, Marcel and Mysore Venkatesh, Supreeth and Riebschlaeger, Lea and Werth, Dirk},
    title = {A Practical Approach for Road Quality Estimation using Smartphone based Inertial Data: IMU data processing pipeline to estimate road quality},
    year = {2022},
    isbn = {9781450395748},
    publisher = {Association for Computing Machinery},
    address = {New York, NY, USA},
    url = {https://doi.org/10.1145/3529399.3529414},
    doi = {10.1145/3529399.3529414},
    booktitle = {Proceedings of the 2022 7th International Conference on Machine Learning Technologies},
    pages = {87–91},
    numpages = {5},
    keywords = {Feature extraction, Predictive maintenance, Road quality estimation, Sensor data processing},
    location = {Rome, Italy},
    series = {ICMLT '22}}`,
    links: {
      code: "https://doi.org/10.1145/3529399.3529414",
      preprint: "https://doi.org/10.1145/3529399.3529414",
      paper: "https://doi.org/10.1145/3529399.3529414",
    },
    abstract: "The tight financial situation in many municipalities does not allow them to record and evaluate the condition of their own transport infrastructure in detail. The present rule-based road quality estimation methods are outdated, very expensive and less accurate. The only subjective and non-recurring documentation leads to the fact that there is no resilient data basis for intelligent, data-based condition forecasts, which would actually be possible with methods of artificial intelligence (AI) and machine learning (ML). The considerable potential for cost minimization that such forecasts would open up via maintenance optimization remains untapped. In this research work, we demonstrate a road quality estimation system given the Inertial Measurement Unit (IMU) data from smartphone mounted on a vehicle. The system consists of a data preprocessing pipeline which removes many uncertainties along with more accurate geo-referencing of the raw data, and training a machine learning model to estimate road quality in terms of a continuous variable. Route quality information is gathered together with GPS tracking using the IMU data coming from smartphone mounted on a vehicle. The ground-truth (road quality) is obtained using conventional road quality measurement system. Next, distinctive features are obtained from the IMU raw data. Consequently, a machine learning model is trained to estimate the road quality from the obtained features with high performance.",
    citebox: "popup1",
    absbox: "absPopup1",
  },
  {
    title: "BILP-Q: Quantum Coalition Structure Generation",
    authors: "Supreeth Mysore Venkatesh, Antonio Macaluso, Matthias Klusch",
    conferences: "Proceedings of the 19th ACM International Conference on Computing Frontiers",
    researchYr: 2022,
    image: "assets/images/research-page/bilp-q.png",
    bibtex: `
    @inproceedings{10.1145/3528416.3530235,
    author = {Venkatesh, Supreeth Mysore and Macaluso, Antonio and Klusch, Matthias},
    title = {BILP-Q: quantum coalition structure generation},
    year = {2022},
    isbn = {9781450393386},
    publisher = {Association for Computing Machinery},
    address = {New York, NY, USA},
    url = {https://doi.org/10.1145/3528416.3530235},
    doi = {10.1145/3528416.3530235},
    booktitle = {Proceedings of the 19th ACM International Conference on Computing Frontiers},
    pages = {189–192},
    numpages = {4},
    keywords = {coalition game theory, quantum AI, quantum computing},
    location = {Turin, Italy},
    series = {CF '22}}`,
    links: {
      code: "https://github.com/supreethmv/BILP-Q",
      preprint: "https://doi.org/10.48550/arXiv.2204.13802",
      paper: "https://doi.org/10.1145/3528416.3530235",
    },
    abstract: "Quantum AI is an emerging field that uses quantum computing to solve typical complex problems in AI. In this work, we propose BILP-Q, the first-ever general quantum approach for solving the Coalition Structure Generation problem (CSGP), which is notably NP-hard. In particular, we reformulate the CSGP in terms of a Quadratic Binary Combinatorial Optimization (QUBO) problem to leverage existing quantum algorithms (e.g., QAOA) to obtain the best coalition structure. Thus, we perform a comparative analysis in terms of time complexity between the proposed quantum approach and the most popular classical baselines. Furthermore, we consider standard benchmark distributions for coalition values to test the BILP-Q on small-scale experiments using the IBM Qiskit environment. Finally, since QUBO problems can be solved operating with quantum annealing, we run BILP-Q on medium-size problems using a real quantum annealer (D-Wave).",
    citebox: "popup2",
    absbox: "absPopup2",
  },
  {
    title: "GCS-Q: Quantum Graph Coalition Structure Generation",
    authors: "Supreeth Mysore Venkatesh, Antonio Macaluso, Matthias Klusch",
    conferences: "Computational Science -- ICCS 2023",
    researchYr: 2023,
    image: "assets/images/research-page/gcs-q.png",
    bibtex: `
    @inproceedings{10.1007/978-3-031-36030-5_11,
    author = {Venkatesh, Supreeth Mysore and Macaluso, Antonio and Klusch, Matthias},
    title = {GCS-Q: Quantum Graph Coalition Structure Generation},
    year = {2023},
    isbn = {978-3-031-36029-9},
    publisher = {Springer-Verlag},
    address = {Berlin, Heidelberg},
    url = {https://doi.org/10.1007/978-3-031-36030-5_11},
    doi = {10.1007/978-3-031-36030-5_11},
    booktitle = {Computational Science – ICCS 2023: 23rd International Conference, Prague, Czech Republic, July 3–5, 2023, Proceedings, Part V},
    pages = {138–152},
    numpages = {15},
    keywords = {Coalition Formation, Quantum Computing, Quantum Artificial Intelligence, Multi-Agent Systems},
    location = {Prague, Czech Republic}}`,
    links: {
      code: "https://github.com/supreethmv/GCS-Q",
      preprint: "https://doi.org/10.48550/arXiv.2212.11372",
      paper: "https://doi.org/10.1007/978-3-031-36030-5_11",
    },
    abstract: "The problem of generating an optimal coalition structure for a given coalition game of rational agents is to find a partition that maximizes their social welfare and known to be NP-hard. Though there are algorithmic solutions with high computational complexity available for this combinatorial optimization problem, it is unknown whether quantum-supported solutions may outperform classical algorithms. In this paper, we propose a novel quantum-supported solution for coalition structure generation in Induced Subgraph Games (ISGs). Our hybrid classical-quantum algorithm, called GCS-Q, iteratively splits a given n-agent graph game into two nonempty subsets in order to obtain a coalition structure with a higher coalition value. The GCS-Q solves the optimal split problem O(n) times, exploring $O(2^n)$ partitions at each step. In particular, the optimal split problem is reformulated as a QUBO and executed on a quantum annealer, which is capable of providing the solution in linear time with respect to n. We show that GCS-Q outperforms the currently best classical and quantum solvers for coalition structure generation in ISGs with its runtime in the order of $n^2$ and an expected approximation ratio of 93% on standard benchmark datasets.",
    citebox: "popup3",
    absbox: "absPopup3",
  },
  {
    title: "QuACS: Variational Quantum Algorithm for Coalition Structure Generation in Induced Subgraph Games",
    authors: "Supreeth Mysore Venkatesh, Antonio Macaluso, Matthias Klusch",
    conferences: "Proceedings of the 20th ACM International Conference on Computing Frontiers",
    researchYr: 2023,
    image: "assets/images/research-page/quacs.png",
    bibtex: 
    `
    @inproceedings{10.1145/3587135.3592192,
    author = {Venkatesh, Supreeth Mysore and Macaluso, Antonio and Klusch, Matthias},
    title = {QuACS: Variational Quantum Algorithm for Coalition Structure Generation in Induced Subgraph Games},
    year = {2023},
    isbn = {9798400701405},
    publisher = {Association for Computing Machinery},
    address = {New York, NY, USA},
    url = {https://doi.org/10.1145/3587135.3592192},
    doi = {10.1145/3587135.3592192},
    booktitle = {Proceedings of the 20th ACM International Conference on Computing Frontiers},
    pages = {197–200},
    numpages = {4},
    keywords = {Coalition Game Theory, Quantum AI, Quantum Computing},
    location = {Bologna, Italy},
    series = {CF '23}}`,
    links: {
      code: "https://github.com/supreethmv/QuACS",
      preprint: "https://doi.org/10.48550/arXiv.2304.07218",
      paper: "https://doi.org/10.1145/3587135.3592192",
    },
    abstract: "Coalition Structure Generation (CSG) is an NP-Hard problem in which agents are partitioned into mutually exclusive groups to maximize their social welfare. In this work, we propose QuACS, a novel hybrid quantum classical algorithm for Coalition Structure Generation in Induced Subgraph Games (ISGs). Starting from a coalition structure where all the agents belong to a single coalition, QuACS recursively identifies the optimal partition into two disjoint subsets. This problem is reformulated as a QUBO and then solved using QAOA. Given an n-agent ISG, we show that the proposed algorithm outperforms existing approximate classical solvers with a runtime of \mathcal{O}(n^2) and an expected approximation ratio of 92\%. Furthermore, it requires a significantly lower number of qubits and allows experiments on medium-sized problems compared to existing quantum solutions. To show the effectiveness of QuACS we perform experiments on standard benchmark datasets using quantum simulation.",
    citebox: "popup4",
    absbox: "absPopup4",
  },
  {
    title: "Q-Seg: Quantum Annealing-based Unsupervised Image Segmentation",
    authors: "Supreeth Mysore Venkatesh, Antonio Macaluso, Marlon Nuske, Matthias Klusch, Andreas Dengel",
    conferences: "IEEE journal Computer Graphics and Applications",
    researchYr: 2024,
    image: "assets/images/research-page/q-seg.jpg",
    bibtex: 
    `
    @ARTICLE{10669751,
    author={Venkatesh, Supreeth Mysore and Macaluso, Antonio and Nuske, Marlon and Klusch, Matthias and Dengel, Andreas},
    journal={IEEE Computer Graphics and Applications}, 
    title={Q-Seg: Quantum Annealing-Based Unsupervised Image Segmentation}, 
    year={2024},
    volume={44},
    number={5},
    pages={27-39},
    doi={10.1109/MCG.2024.3455012}}`,
    links: {
      code: "https://github.com/supreethmv/Q-Seg",
      preprint: "https://doi.org/10.48550/arXiv.2311.12912",
      paper: "https://doi.org/10.1109/MCG.2024.3455012",
    },
    abstract: "We present Q-Seg, a novel unsupervised image segmentation method based on quantum annealing, tailored for existing quantum hardware. We formulate the pixel- wise segmentation problem, which assimilates spectral and spatial information of the image, as a graph-cut optimization task. Our method efficiently leverages the interconnected qubit topology of the D-Wave Advantage device, offering superior scalability over existing quantum approaches and outperforming several tested state-of-the-art classical methods. Empirical evaluations on synthetic datasets have shown that Q-Seg has better runtime performance than the state-of-the-art classical optimizer Gurobi. The method has also been tested on earth observation image segmentation, a critical area with noisy and unreliable annotations. In the era of noisy intermediate-scale quantum, Q-Seg emerges as a reliable contender for real-world applications in comparison to advanced techniques like Segment Anything. Consequently, Q-Seg offers a promising solution using available quantum hardware, especially in situations constrained by limited labeled data and the need for efficient computational runtime.",
    citebox: "popup5",
    absbox: "absPopup5",
  },
  {
    title: "Qubit-efficient Variational Quantum Algorithms for Image Segmentation",
    authors: "Supreeth Mysore Venkatesh, Antonio Macaluso, Marlon Nuske, Matthias Klusch, Andreas Dengel",
    conferences: "IEEE International Conference on Quantum Computing and Engineering (QCE) 2024",
    researchYr: 2024,
    image: "assets/images/research-page/vqa-segmentation.jpg",
    bibtex: 
    `
    @INPROCEEDINGS{10821431,
    author={Venkatesh, Supreeth Mysore and Macaluso, Antonio and Nuske, Marlon and Klusch, Matthias and Dengel, Andreas},
    booktitle={2024 IEEE International Conference on Quantum Computing and Engineering (QCE)}, 
    title={Qubit-Efficient Variational Quantum Algorithms for Image Segmentation}, 
    year={2024},
    volume={01},
    pages={450-456},
    doi={10.1109/QCE60285.2024.00059}}`,
    links: {
      code: "https://github.com/supreethmv/NISQ-seg",
      preprint: "https://doi.org/10.48550/arXiv.2405.14405",
      paper: "https://doi.org/10.1109/QCE60285.2024.00059",
    },
    abstract: "Quantum computing is expected to transform a range of computational tasks beyond the reach of classical algorithms. In this work, we examine the application of variational quantum algorithms (VQAs) for unsupervised image segmentation to partition images into separate semantic regions. Specifically, we formulate the task as a graph cut optimization problem and employ two established qubit-efficient VQAs, which we refer to as Parametric Gate Encoding (PGE) and Ancilla Basis Encoding (ABE), to find the optimal segmentation mask. In addition, we propose Adaptive Cost Encoding (ACE), a new approach that leverages the same circuit architecture as ABE but adopts a problem-dependent cost function. We benchmark PGE, ABE and ACE on synthetically generated images, focusing on quality and trainability. ACE shows consistently faster convergence in training the parameterized quantum circuits in comparison to PGE and ABE. Furthermore, we provide a theoretical analysis of the scalability of these approaches against the Quantum Approximate Optimization Algorithm (QAOA), showing a significant cutback in the quantum resources, especially in the number of qubits that logarithmically depends on the number of pixels. The results validate the strengths of ACE, while concurrently highlighting its inherent limitations and challenges. This paves way for further research in quantum-enhanced computer vision.",
    citebox: "popup6",
    absbox: "absPopup6",
  },
  {
    title: "Quantum Annealing-Based Algorithm for Efficient Coalition Formation Among LEO Satellites",
    authors: "Supreeth Mysore Venkatesh, Antonio Macaluso, Marlon Nuske, Matthias Klusch, Andreas Dengel",
    conferences: "Quantum Software Engineering and Technology, IEEE Quantum Week 2024",
    researchYr: 2024,
    image: "assets/images/research-page/leosatellites.jpg",
    bibtex: 
    `
    @INPROCEEDINGS{10821173,
    author={Venkatesh, Supreeth Mysore and Macaluso, Antonio and Nuske, Marlon and Klusch, Matthias and Dengel, Andreas},
    booktitle={2024 IEEE International Conference on Quantum Computing and Engineering (QCE)}, 
    title={Quantum Annealing-Based Algorithm for Efficient Coalition Formation Among LEO Satellites}, 
    year={2024},
    volume={02},
    pages={205-210},
    doi={10.1109/QCE60285.2024.10279}}`,
    links: {
      code: "https://github.com/supreethmv/LEO-satellites-coalition",
      preprint: "https://doi.org/10.48550/arXiv.2408.06007",
      paper: "https://doi.org/10.1109/QCE60285.2024.10279",
    },
    abstract: "The increasing number of Low Earth Orbit (LEO) satellites, driven by lower manufacturing and launch costs, is proving invaluable for Earth observation missions and low-latency internet connectivity. However, as the number of satellites increases, the number of communication links to maintain also rises, making the management of this vast network increasingly challenging and highlighting the need for clustering satellites into efficient groups as a promising solution. This paper formulates the clustering of LEO satellites as a coalition structure generation (CSG) problem and leverages quantum annealing to solve it. We represent the satellite network as a graph and obtain the optimal partitions using a hybrid quantum-classical algorithm called GCS-Q. The algorithm follows a top-down approach by iteratively splitting the graph at each step using a quadratic unconstrained binary optimization (QUBO) formulation. To evaluate our approach, we utilize real-world three-line element set (TLE/3LE) data for Starlink satellites from Celestrak. Our experiments, conducted using the D-Wave Advantage annealer and the state-of-the-art solver Gurobi, demonstrate that the quantum annealer significantly outperforms classical methods in terms of runtime while maintaining the solution quality. The performance achieved with quantum annealers surpasses the capabilities of classical computers, highlighting the transformative potential of quantum computing in optimizing the management of large-scale satellite networks.",
    citebox: "popup7",
    absbox: "absPopup7",
  },
];

function copyBibtex(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("BibTeX copied to clipboard!");
  }).catch(err => {
    console.error("Failed to copy: ", err);
  });
}


AOS.init();
const fillData = () => {
  let output = "";
  research.reverse().forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      bibtex,
      absbox,
      abstract,
      links
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="${links.paper}" class="paperTitle" target="_blank"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>

                        <a href="${links.paper}" class="button button-accent button-small text-right" target="_blank">
                             PAPER
                        </a>

                        <a href="${links.preprint}" class="button button-accent button-small text-right" target="_blank">
                             PREPRINT
                        </a>

                        <a href="${links.code}" class="button button-accent button-small text-right" target="_blank">
                             CODE
                        </a>

                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                          <div style="display: flex; justify-content: space-between; align-items: center;">
                              <strong>BibTeX</strong>
                              </div>
                          <pre style="background: #f8f9fa; padding: 10px; border-radius: 5px; overflow-x: auto;">
                          ${bibtex}
                          </pre>
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
