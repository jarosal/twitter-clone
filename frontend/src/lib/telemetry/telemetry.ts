import { NodeSDK } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-grpc';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { AlwaysOnSampler } from '@opentelemetry/sdk-trace-base';
import { Resource } from '@opentelemetry/resources';

const TRACE_URL = process.env.OTEL_EXPORTER_OTLP_ENDPOINT;
const SERVICE_NAME = process.env.OTEL_SERVICE_NAME;

const otelNodeSdk = new NodeSDK({
  autoDetectResources: true,
  serviceName: SERVICE_NAME,
  traceExporter: new OTLPTraceExporter({
    url: TRACE_URL,
    headers: {}
  }),
  sampler: new AlwaysOnSampler(),
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: SERVICE_NAME
  }),
  instrumentations: [
    getNodeAutoInstrumentations({
      // Disable houdini-svelte noise like dns.lookup on gateway or filereads on schema
      '@opentelemetry/instrumentation-fs': {
        enabled: false
      },
      '@opentelemetry/instrumentation-net': {
        enabled: false
      },
      '@opentelemetry/instrumentation-dns': {
        enabled: false
      }
    })
  ]
});

export class Telemetry {
  private static instance: Telemetry;
  private initialized = false;

  private constructor() {}

  public static getInstance(): Telemetry {
    if (!Telemetry.instance) {
      Telemetry.instance = new Telemetry();
    }

    return Telemetry.instance;
  }

  public start() {
    if (!this.initialized) {
      this.initialized = true;
      otelNodeSdk.start();
    }
  }
} 