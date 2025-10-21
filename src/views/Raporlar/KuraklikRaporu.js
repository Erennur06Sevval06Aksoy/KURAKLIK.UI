import React from "react";
import { Card, Row, Col, Container, Table, Badge, Button, Form, InputGroup } from "react-bootstrap";

// Updated, styled single-file React component for a nicer filter UI and theme (LIGHT THEME)
// Uses Bootstrap classes + component-scoped CSS inserted via a <style> tag

export default function KuraklikRaporu() {
  return (
      <>
        <style>{`
        /* Component-scoped styles: Updated for a cleaner, modern look with a LIGHT theme */
        
        .kb-card {
          /* Ana kart stili: Açık zemin, belirgin gölge */
          background: #ffffff;
          color: #212529;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .kb-header {
          /* Başlık için belirgin ve modern bir gradient */
          padding: 24px;
          /* Mavi tonlarında gradient: Açık temaya uyumlu, canlı bir başlık */
          background: linear-gradient(90deg, #42a5f5, #1e88e5); 
          border-bottom: 0;
          color: #ffffff;
        }

        .kb-title {
          margin: 0;
          font-weight: 700;
          letter-spacing: 0;
          color: #ffffff;
        }

        .kb-subtitle {
          margin: 0;
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.95rem;
        }

        .kb-filters {
          /* Filtreler bölümü için hafifçe gölgeli bir kart efekti */
          background: #f8f9fa;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #e9ecef;
          box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.05);
        }

        /* Filtre Alanları İçin Modern Görünüm */
        .kb-inputgroup .input-group-text {
          /* InputGroup ön/son eki */
          background: #e9ecef;
          border: 1px solid #ced4da;
          border-right: 0;
          color: #6c757d;
          padding: 0.5rem 0.75rem;
          border-radius: 8px 0 0 8px !important;
        }
        
        .kb-inputgroup .form-control, .kb-inputgroup .form-select {
          /* Input ve Select alanları */
          border: 1px solid #ced4da;
          background: #ffffff;
          color: #212529;
          box-shadow: none !important;
          transition: border-color 0.2s, box-shadow 0.2s;
          padding: 0.5rem 0.75rem;
          border-left: 0;
          border-radius: 0 8px 8px 0 !important;
        }

        .kb-inputgroup .form-control:focus, .kb-inputgroup .form-select:focus {
          border-color: #42a5f5;
          background: #ffffff;
          box-shadow: 0 0 0 0.25rem rgba(66, 165, 245, 0.25) !important;
        }
        
        /* Form Text - Yardımcı Metin */
        .form-text {
          color: #6c757d !important;
          font-size: 0.8rem;
        }

        /* Etiketler */
        .form-label {
          font-weight: 600;
          color: #495057;
          margin-bottom: 0.4rem !important;
        }

        .kb-actions .btn {
          min-width: 140px;
          font-weight: 600;
          border-radius: 20px; 
        }
        
        /* Tablo Stilleri */
        .kb-table thead th {
          border-bottom: 2px solid #e9ecef;
          font-weight: 600;
          color: #6c757d;
          text-transform: uppercase;
        }

        .kb-table tbody tr {
          border-top: 1px solid #f8f9fa;
        }

        .kb-table tbody tr:hover {
          background: #f1f1f1 !important;
        }

        .kb-table tbody tr:nth-child(odd) {
          background: #fafafa;
        }

        /* Renk Paleti: Canlı ve okunur badge renkleri */
        .kb-badge-danger { background-color: #ef5350 !important; }
        .kb-badge-warning { background-color: #ffb300 !important; }
        .kb-badge-success { background-color: #66bb6a !important; }

        /* Responsive tweaks */
        @media (max-width: 575px) {
          .kb-actions { flex-direction: column-reverse; gap: 8px; }
          .kb-actions .btn { width: 100%; }
        }
      `}</style>

        <Container fluid className="py-5" style={{ minHeight: '100vh', background: '#f4f7fa' }}>
          <Row>
            <Col md="12">
              <Card className="kb-card">
                <Card.Header className="kb-header d-flex flex-column flex-sm-row justify-content-between align-items-sm-center">
                  <div>
                    <h4 className="kb-title mb-1">💧 Kuraklık Raporu</h4>
                    <p className="kb-subtitle mb-0">Rapor verilerini filtreleyin, analiz edin ve dışa aktarın.</p>
                  </div>
                  <div className="text-end mt-3 mt-sm-0">
                    <Button size="sm" variant="light" className="me-2 rounded-pill shadow-sm text-primary">
                      <i className="fas fa-chart-bar me-1"></i> Grafikler
                    </Button>
                    <Button size="sm" variant="primary" className="rounded-pill shadow-sm">
                      <i className="fas fa-file-export me-1"></i> Dışa Aktar
                    </Button>
                  </div>
                </Card.Header>

                <Card.Body>
                  {/* Filtreler */}
                  <div className="kb-filters mb-4">
                    <Form>
                      <Row className="g-4 align-items-end">

                        {/* Dönem (Ay) */}
                        <Col lg="3" md="6">
                          <Form.Label>Dönem (Ay)</Form.Label>
                          <InputGroup className="kb-inputgroup shadow-sm">
                            <InputGroup.Text><i className="far fa-calendar-alt"></i></InputGroup.Text>
                            <Form.Control type="month" defaultValue="2025-08" />
                          </InputGroup>
                          <Form.Text>Raporu belirli bir aya daraltın.</Form.Text>
                        </Col>

                        {/* Bölge - Artık Tekil Seçim (Dropdown) */}
                        <Col lg="3" md="6">
                          <Form.Label>Bölge</Form.Label>
                          <InputGroup className="kb-inputgroup shadow-sm">
                            <InputGroup.Text><i className="fas fa-map-marker-alt"></i></InputGroup.Text>
                            <Form.Select defaultValue="Tümü">
                              <option value="Tümü">Tüm Bölgeler</option>
                              <option>Marmara</option>
                              <option>Ege</option>
                              <option>Akdeniz</option>
                              <option>İç Anadolu</option>
                              <option>Karadeniz</option>
                              <option>Doğu Anadolu</option>
                              <option>Güneydoğu Anadolu</option>
                            </Form.Select>
                          </InputGroup>
                          <Form.Text>Görüntülenecek bölgeyi seçin.</Form.Text>
                        </Col>

                        {/* Risk Seviyesi */}
                        <Col lg="3" md="6">
                          <Form.Label>Risk Seviyesi</Form.Label>
                          <InputGroup className="kb-inputgroup shadow-sm">
                            <InputGroup.Text><i className="fas fa-exclamation-triangle"></i></InputGroup.Text>
                            <Form.Select defaultValue="Tümü">
                              <option>Tümü</option>
                              <option>Yüksek</option>
                              <option>Orta</option>
                              <option>Düşük</option>
                            </Form.Select>
                          </InputGroup>
                          <Form.Text>Filtrelenecek risk seviyesini seçin.</Form.Text>
                        </Col>

                        {/* Aksiyonlar */}
                        <Col lg="3" md="6" className="d-flex justify-content-end kb-actions">
                          <div className="d-flex gap-2 w-100 justify-content-end">
                            <Button size="sm" variant="primary" className="rounded-pill shadow-sm flex-grow-1 flex-md-grow-0">
                              <i className="fas fa-filter me-1"></i> Uygula
                            </Button>
                            <Button size="sm" variant="outline-secondary" className="rounded-pill shadow-sm flex-grow-1 flex-md-grow-0">
                              <i className="fas fa-undo me-1"></i> Temizle
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </div>

                  {/* Ek Dışa Aktarma Aksiyonları */}
                  <div className="mb-3 d-flex justify-content-end align-items-center gap-2">
                    <Button size="sm" variant="outline-info" className="rounded-pill shadow-sm">
                      <i className="fas fa-file-csv me-1"></i> CSV
                    </Button>
                    <Button size="sm" variant="outline-danger" className="rounded-pill shadow-sm">
                      <i className="fas fa-file-pdf me-1"></i> PDF
                    </Button>
                    <Button size="sm" variant="outline-success" className="rounded-pill shadow-sm">
                      <i className="fas fa-file-excel me-1"></i> Excel
                    </Button>
                  </div>

                  {/* Rapor Tablosu */}
                  <div className="table-responsive">
                    <Table className="kb-table align-middle" hover>
                      <thead className="text-muted small">
                      <tr>
                        <th>Bölge</th>
                        <th>İl</th>
                        <th>Kuraklık Endeksi</th>
                        <th>Risk Seviyesi</th>
                        <th>Yağış (mm)</th>
                        <th>Nem (%)</th>
                        <th>Değerlendirme</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>Marmara</td>
                        <td>İstanbul</td>
                        <td><strong>3.9</strong></td>
                        <td><Badge className="kb-badge-danger text-white px-2 py-1 rounded-pill">Yüksek</Badge></td>
                        <td>12</td>
                        <td>27</td>
                        <td>Kritik müdahale önerilir</td>
                      </tr>

                      <tr>
                        <td>Ege</td>
                        <td>İzmir</td>
                        <td><strong>3.1</strong></td>
                        <td><Badge className="kb-badge-warning text-white px-2 py-1 rounded-pill">Orta</Badge></td>
                        <td>24</td>
                        <td>36</td>
                        <td>Su tasarruf önlemleri artırılmalı</td>
                      </tr>

                      <tr>
                        <td>Akdeniz</td>
                        <td>Antalya</td>
                        <td><strong>4.2</strong></td>
                        <td><Badge className="kb-badge-danger text-white px-2 py-1 rounded-pill">Yüksek</Badge></td>
                        <td>10</td>
                        <td>21</td>
                        <td>Acil eylem planı gerekli</td>
                      </tr>

                      <tr>
                        <td>İç Anadolu</td>
                        <td>Konya</td>
                        <td><strong>2.8</strong></td>
                        <td><Badge className="kb-badge-warning text-white px-2 py-1 rounded-pill">Orta</Badge></td>
                        <td>32</td>
                        <td>41</td>
                        <td>Yakın takip önerilir</td>
                      </tr>

                      <tr>
                        <td>Karadeniz</td>
                        <td>Trabzon</td>
                        <td><strong>1.7</strong></td>
                        <td><Badge className="kb-badge-success text-white px-2 py-1 rounded-pill">Düşük</Badge></td>
                        <td>92</td>
                        <td>70</td>
                        <td>Durum normal</td>
                      </tr>
                      </tbody>
                    </Table>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
  );
}
